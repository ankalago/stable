import { Button, Header } from "ui";

export default function Page() {
  return (
    <>
      <Header user={{ name: 'Web' }} onLogin={null} onLogout={null} onCreateAccount={null} />
      <Button label="Button Web" />
    </>
  );
}
