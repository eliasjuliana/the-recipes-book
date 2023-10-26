import { useSession } from "../stores/useSession"

const HomeView = () => {

  const {} = useSession();

  return (
    <h1>Bienvenido</h1>
  )
}

export default HomeView