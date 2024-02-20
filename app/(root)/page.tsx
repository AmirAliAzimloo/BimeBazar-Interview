import Header from "@/components/ui/header";
import Form from "./_components/form/form";
import Wrapper from "@/components/ui/wrapper";

export default function Home() {
  return (
    <main>
      <Header title="تکمیل اطلاعات" />
      <Wrapper className="py-8" >
      <Form />
      </Wrapper>
    </main>
  );
}
