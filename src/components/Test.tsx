import { useLocalStorage } from 'usehooks-ts'

function Test() {

    const [testhook, setTesthook] = useLocalStorage("test", 0);
  return (
    <>
    <div>{testhook}</div>
    <button onClick={() => setTesthook(testhook + 1)}>click me</button>
    </>
  )
}

export default Test