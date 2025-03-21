// import React from "react";
// import { Label } from "../../../components/ui/label";
// import UploadInput from "../../../components/UploadInput";
// import "./index.css";

// const VerificationDocuments = ({ form, setForm, controlButtons }) => {
//     const updateDocument = (field, file) => {
//         setForm((prev) => ({
//             ...prev,
//             verificationDocuments: {
//                 ...prev.verificationDocuments,
//                 [field]: file,
//             },
//         }));
//     };

//     const renderPreview = (file) => {
//         if (file && file instanceof File) {
//             return (
//                 <div className="mt-2">
//                     <img
//                         src={URL.createObjectURL(file)}
//                         alt="Document Preview"
//                         className="max-w-[200px] max-h-[200px] object-contain"
//                     />
//                 </div>
//             );
//         }
//         return null;
//     };

//     return (
//         <div
//             style={{
//                 boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//                 marginBottom: "100px",
//                 background: "white",
//             }}
//             className="relative w-full max-w-[700px] mx-auto py-[30px] flex flex-col px-5 gap-[30px] bg-white rounded-[16px]"
//         >
//             <h1 className="text-left font-[700] text-[24px]">Verification Documents</h1>

//             <div className="flex items-start">
//                 <Label htmlFor="certificateOfRegistration" className="w-[300px] text-left leading-[1.3]">
//                     Certificate of Registration *
//                 </Label>
//                 <div>
//                     <UploadInput
//                         id="certificateOfRegistration"
//                         value={form.verificationDocuments.certificateOfRegistration}
//                         onChange={(file) => updateDocument("certificateOfRegistration", file)}
//                     />
//                     {renderPreview(form.verificationDocuments.certificateOfRegistration)}
//                 </div>
//             </div>

//             <div className="flex items-start">
//                 <Label htmlFor="taxClearanceCertificate" className="w-[300px] text-left leading-[1.3]">
//                     Tax Clearance Certificate *
//                 </Label>
//                 <div>
//                     <UploadInput
//                         id="taxClearanceCertificate"
//                         value={form.verificationDocuments.taxClearanceCertificate}
//                         onChange={(file) => updateDocument("taxClearanceCertificate", file)}
//                     />
//                     {renderPreview(form.verificationDocuments.taxClearanceCertificate)}
//                 </div>
//             </div>

//             <div className="flex items-start">
//                 <Label htmlFor="proofOfAddress" className="w-[300px] text-left leading-[1.3]">
//                     Proof of Address *
//                 </Label>
//                 <div>
//                     <UploadInput
//                         id="proofOfAddress"
//                         value={form.verificationDocuments.proofOfAddress}
//                         onChange={(file) => updateDocument("proofOfAddress", file)}
//                     />
//                     {renderPreview(form.verificationDocuments.proofOfAddress)}
//                 </div>
//             </div>

//             <div className="flex items-start">
//                 <Label htmlFor="accreditationCertificate" className="w-[300px] text-left leading-[1.3]">
//                     Accreditation Certificate *
//                 </Label>
//                 <div>
//                     <UploadInput
//                         id="accreditationCertificate"
//                         value={form.verificationDocuments.accreditationCertificate}
//                         onChange={(file) => updateDocument("accreditationCertificate", file)}
//                     />
//                     {renderPreview(form.verificationDocuments.accreditationCertificate)}
//                 </div>
//             </div>

//             {controlButtons}
//         </div>
//     );
// };

// export default VerificationDocuments;


// import React from "react";
// import { Label } from "../../../components/ui/label";
// import UploadButton from "@/components/UploadButton";
// import "./index.css";

// const VerificationDocuments = ({ form = {}, setForm, controlButtons }) => {
//   // Ensure the form has a verificationDocuments object with default properties
//   const verificationDocuments = form.verificationDocuments || {
//     certificateOfRegistration: null,
//     taxClearanceCertificate: null,
//     proofOfAddress: null,
//     accreditationCertificate: null,
//   };

//   // Function to update the document in the form state
//   const updateDocument = (field, fileUrl) => {
//     setForm((prev) => ({
//       ...prev,
//       verificationDocuments: {
//         ...prev.verificationDocuments,
//         [field]: fileUrl,
//       },
//     }));
//   };

//   return (
//     <div
//       style={{
//         boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//         marginBottom: "100px",
//         background: "white",
//       }}
//       className="relative w-full max-w-[700px] mx-auto py-[30px] flex flex-col px-5 gap-[30px] bg-white rounded-[16px]"
//     >
//       <h1 className="text-left font-[700] text-[24px]">Verification Documents</h1>

//       {/* Certificate of Registration */}
//       <div className="flex items-start">
//         <Label
//           htmlFor="certificateOfRegistration"
//           className="w-[300px] text-left leading-[1.3]"
//         >
//           Certificate of Registration *
//         </Label>
//         <div>
//           <UploadButton
//             fileUrl={verificationDocuments.certificateOfRegistration}
//             title="certificateOfRegistration"
//             handleFileChange={(fileUrl) =>
//               updateDocument("certificateOfRegistration", fileUrl)
//             }
//             accept=".jpg, .png, .jpeg, .pdf, .doc, .docx, .csv, .txt"
//             removeFile={() => updateDocument("certificateOfRegistration", null)}
//           />
//         </div>
//       </div>

//       {/* Tax Clearance Certificate */}
//       <div className="flex items-start">
//         <Label
//           htmlFor="taxClearanceCertificate"
//           className="w-[300px] text-left leading-[1.3]"
//         >
//           Tax Clearance Certificate *
//         </Label>
//         <div>
//           <UploadButton
//             fileUrl={verificationDocuments.taxClearanceCertificate}
//             title="taxClearanceCertificate"
//             handleFileChange={(fileUrl) =>
//               updateDocument("taxClearanceCertificate", fileUrl)
//             }
//             accept=".jpg, .png, .jpeg, .pdf, .doc, .docx, .csv, .txt"
//             removeFile={() => updateDocument("taxClearanceCertificate", null)}
//           />
//         </div>
//       </div>

//       {/* Proof of Address */}
//       <div className="flex items-start">
//         <Label
//           htmlFor="proofOfAddress"
//           className="w-[300px] text-left leading-[1.3]"
//         >
//           Proof of Address *
//         </Label>
//         <div>
//           <UploadButton
//             fileUrl={verificationDocuments.proofOfAddress}
//             title="proofOfAddress"
//             handleFileChange={(fileUrl) =>
//               updateDocument("proofOfAddress", fileUrl)
//             }
//             accept=".jpg, .png, .jpeg, .pdf, .doc, .docx, .csv, .txt"
//             removeFile={() => updateDocument("proofOfAddress", null)}
//           />
//         </div>
//       </div>

//       {/* Accreditation Certificate */}
//       <div className="flex items-start">
//         <Label
//           htmlFor="accreditationCertificate"
//           className="w-[300px] text-left leading-[1.3]"
//         >
//           Accreditation Certificate *
//         </Label>
//         <div>
//           <UploadButton
//             fileUrl={verificationDocuments.accreditationCertificate}
//             title="accreditationCertificate"
//             handleFileChange={(fileUrl) =>
//               updateDocument("accreditationCertificate", fileUrl)
//             }
//             accept=".jpg, .png, .jpeg, .pdf, .doc, .docx, .csv, .txt"
//             removeFile={() => updateDocument("accreditationCertificate", null)}
//           />
//         </div>
//       </div>

//       {controlButtons}
//     </div>
//   );
// };

// export default VerificationDocuments;


import { Label } from "../../../components/ui/label"
import UploadButton from "@/components/UploadButton"
import "./index.css"

const VerificationDocuments = ({ form = {}, setForm, controlButtons }) => {
  // Ensure the form has a verificationDocuments object with default properties
  const verificationDocuments = form.verificationDocuments || {
    certificateOfRegistration: null,
    taxClearanceCertificate: null,
    proofOfAddress: null,
    accreditationCertificate: null,
  }

  // Function to update the document in the form state
  const updateDocument = (field, fileUrl) => {
    setForm((prev) => ({
      ...prev,
      verificationDocuments: {
        ...(prev.verificationDocuments || {}),
        [field]: fileUrl,
      },
    }))
  }

  return (
    <div
      style={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        marginBottom: "100px",
        background: "white",
      }}
      className="relative w-full max-w-[700px] mx-auto py-[30px] flex flex-col px-5 gap-[30px] bg-white rounded-[16px]"
    >
      <h1 className="text-left font-[700] text-[24px]">Verification Documents</h1>

      {/* Certificate of Registration */}
      <div className="flex items-start">
        <Label htmlFor="certificateOfRegistration" className="w-[300px] text-left leading-[1.3]">
          Certificate of Registration *
        </Label>
        <div>
          <UploadButton
            fileUrl={verificationDocuments.certificateOfRegistration}
            title="certificateOfRegistration"
            handleFileChange={(fileUrl) => updateDocument("certificateOfRegistration", fileUrl)}
            accept=".jpg, .png, .jpeg, .pdf, .doc, .docx, .csv, .txt"
            removeFile={() => updateDocument("certificateOfRegistration", null)}
          />
        </div>
      </div>

      {/* Tax Clearance Certificate */}
      <div className="flex items-start">
        <Label htmlFor="taxClearanceCertificate" className="w-[300px] text-left leading-[1.3]">
          Tax Clearance Certificate *
        </Label>
        <div>
          <UploadButton
            fileUrl={verificationDocuments.taxClearanceCertificate}
            title="taxClearanceCertificate"
            handleFileChange={(fileUrl) => updateDocument("taxClearanceCertificate", fileUrl)}
            accept=".jpg, .png, .jpeg, .pdf, .doc, .docx, .csv, .txt"
            removeFile={() => updateDocument("taxClearanceCertificate", null)}
          />
        </div>
      </div>

      {/* Proof of Address */}
      <div className="flex items-start">
        <Label htmlFor="proofOfAddress" className="w-[300px] text-left leading-[1.3]">
          Proof of Address *
        </Label>
        <div>
          <UploadButton
            fileUrl={verificationDocuments.proofOfAddress}
            title="proofOfAddress"
            handleFileChange={(fileUrl) => updateDocument("proofOfAddress", fileUrl)}
            accept=".jpg, .png, .jpeg, .pdf, .doc, .docx, .csv, .txt"
            removeFile={() => updateDocument("proofOfAddress", null)}
          />
        </div>
      </div>

      {/* Accreditation Certificate */}
      <div className="flex items-start">
        <Label htmlFor="accreditationCertificate" className="w-[300px] text-left leading-[1.3]">
          Accreditation Certificate *
        </Label>
        <div>
          <UploadButton
            fileUrl={verificationDocuments.accreditationCertificate}
            title="accreditationCertificate"
            handleFileChange={(fileUrl) => updateDocument("accreditationCertificate", fileUrl)}
            accept=".jpg, .png, .jpeg, .pdf, .doc, .docx, .csv, .txt"
            removeFile={() => updateDocument("accreditationCertificate", null)}
          />
        </div>
      </div>

      {controlButtons}
    </div>
  )
}

export default VerificationDocuments

