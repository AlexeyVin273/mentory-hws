import type { ChangeEvent, FormEvent } from 'react'
import { useId, useState } from "react";
import type { Course } from "@/app/course.types";
import styles from './EditForm.module.css'

type EditFormProps = {
  course: Course
  onSave: (course: Course) => void
}

const EditForm = ({ course, onSave }: EditFormProps) => {
  const formId = useId()
  const [title, setTitle] = useState(course.title);
  const [seats, setSeats] = useState(String(course.seats));
  const [titleError, setTitleError] = useState<string | null>(null)
  const [seatsError, setSeatsError] = useState<string | null>(null)

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
    setTitleError(null)
  }

  const handleSeatsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSeats(event.target.value);
    setSeatsError(null)
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    let hasError = false

    if (title.trim() === '') {
      setTitleError('Введите название курса')
      hasError = true
    }

    if (seats.trim() === '') {
      setSeatsError('Введите количество мест')
      hasError = true
    }

    const seatsNumber = Number(seats)

    if (!Number.isInteger(seatsNumber) || seatsNumber < 0) {
      setSeatsError('Введите целое число от 0')
      hasError = true
    }

    if (!hasError) {
      const newCourse = {
        ...course,
        title,
        seats: seatsNumber
      }

      onSave(newCourse)
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h4 className={styles.heading}>Редактирование курса</h4>
      <label className={styles.field}>
        <span className={styles.label}>Название курса</span>
        <input className={styles.input} type="text" placeholder="Введите название" value={title} onChange={handleTitleChange} aria-invalid={Boolean(titleError)} aria-describedby={titleError ? `${formId}-title-error` : undefined} />
        {
          titleError &&
            <span className={styles.error} id={`${formId}-title-error`} role="alert">{titleError}</span>
        }
      </label>
      <label className={styles.field}>
        <span className={styles.label}>Количество мест</span>
        <input className={styles.input} type="text" inputMode="numeric" placeholder="Например, 12" value={seats} onChange={handleSeatsChange} aria-invalid={Boolean(seatsError)} aria-describedby={`${formId}-seats-hint${seatsError ? ` ${formId}-seats-error` : ''}`} />
        <span className={styles.hint} id={`${formId}-seats-hint`}>Целое число от 0</span>
        {
          seatsError &&
            <span className={styles.error} id={`${formId}-seats-error`} role="alert">{seatsError}</span>
        }
      </label>
      <button className={styles.submit} type="submit">Сохранить</button>
    </form>
  );
}

export default EditForm;
