import { Editor } from "./editor";

interface DocumentIdPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentIdPageProps = async ({ params }: DocumentIdPageProps) => {
  const { documentId } = await params;

  return (
    <div>
      Document ID: {documentId}
      <Editor />
    </div>
  );
};

export default DocumentIdPageProps;
