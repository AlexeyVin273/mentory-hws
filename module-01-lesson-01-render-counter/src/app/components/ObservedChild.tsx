import { useEffect, useRef } from "react";

const ObservedChild = ({title}: {title: string}) => {
  console.log('Вызван дочерний компонент')

  const nodeRef = useRef(null)

  useEffect(() => {
    const node = nodeRef.current

    if (!node) return

    const observer = new MutationObserver(() => {
      console.log('DOM дочернего узла изменён')
    })

    observer.observe(node, {
      childList: true,
      characterData: true,
      subtree: true
    })

    return () => observer.disconnect()
  }, [])

  return (
    <p ref={nodeRef}>
      {title}
    </p>
  );
}

export default ObservedChild;
