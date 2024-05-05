function ModalLayout({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}

export default ModalLayout;
