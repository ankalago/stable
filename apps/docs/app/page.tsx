import { Button, Header } from "ui";

export default function Page() {
  return (
    <>
      <Header user={{ name: 'Docs' }} onLogin={null} onLogout={null} onCreateAccount={null} />
      <Button label="Button Docs" />
    </>
  );
}
