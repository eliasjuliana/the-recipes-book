import LoginForm from "./LoginForm";

const LoginModal = () => {
  return (
    <>
      <button
        className="flex gap-1 hover:text-red-500 font-semibold"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <p>Login</p>
        <span className="material-symbols-outlined">
login
</span>
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">Hello!</h3>
          <LoginForm/>
        </div>
      </dialog>
    </>
  );
};

export default LoginModal;
