import { PDFViewer } from '@react-pdf/renderer';
import ResumePDF from '../components/pdf/ResumePDF';

const Resume = () => {
  return (
    <PDFViewer style={{ width: '100%', height: '100vh' }}>
      <ResumePDF />
    </PDFViewer>
  );
};

export default Resume;
