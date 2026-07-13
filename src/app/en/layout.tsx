import { SetHtmlLang } from "@/components/site/set-html-lang";

export default function EnLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SetHtmlLang locale="en" />
      {children}
    </>
  );
}
