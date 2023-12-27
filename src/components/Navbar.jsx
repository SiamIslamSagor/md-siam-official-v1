import v1Logo from "../assets/port-v1-logo.png";

/* const My_CV_PDF = "http://localhost:5173/file_pdf.pdf"; */
const Navbar = () => {
  /*   const handleDownload = url => {
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.setAttribute("download", "file_pdf.pdf");

    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }; */

  /* const handleDownload = () => {
    // Extract the file ID from the Google Drive link
    const driveLink =
      "https://drive.google.com/file/d/18AeYRP1ngN6eM13L5O687pGAfzN1_R7w/view?fbclid=IwAR1QtWASaHvliAboN1V5_w2OW7ajT8Eek4NbhZjnuI4lrnPncatiFmbF4JM";
    const fileId = driveLink.match(/\/d\/(.+?)\//)[1];

    // Create a link with the appropriate Google Drive download URL
    const downloadLink = `https://drive.google.com/uc?id=${fileId}`;

    // Create an invisible link and trigger the click event
    const link = document.createElement("a");
    link.href = downloadLink;
    link.download = "YourCVFileName.pdf"; // Set the desired file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }; */

  /*  const link = (
    <>
      <div className="cursor-pointer px-5">
        <a>Item 1</a>
      </div>
      <div className="cursor-pointer px-5">
        <a>Item 2</a>
      </div>
      <div className="cursor-pointer px-5">
        <a>Item 3</a>
      </div>
    </>
  ); */
  return (
    <div className="container  mx-auto bg-ray-500 px-4  ">
      <div className="flex justify-between items-center py-2">
        <div>
          <a className="">
            <img className="max-w-[220px] h-14" src={v1Logo} alt="logo" />
          </a>
        </div>
        <div className="flex items-center px-4">
          <ul className="flex  gap-5">
            <div className="max-sm:hidden max-md:px-2 md:px-5 cursor-pointer font-medium">
              <a href="#about">About</a>
            </div>
            <div className="max-sm:hidden max-md:px-2 md:px-5 cursor-pointer font-medium">
              <a href="#work">Work</a>
            </div>
            <div className="max-sm:hidden max-md:px-2 md:px-5 cursor-pointer font-medium">
              <a href="#contact">Contact</a>
            </div>
          </ul>
          <p className="text-gray-500 px-5 max-sm:hidden">|</p>
          <a
            href={
              "https://drive.google.com/file/d/1iGefe2QHaSH9diyPljG_tsmoELZ8Ua7s/view"
            }
            target={"blank"}
            download="Resume"
          >
            <button
              // onClick={handleDownload}
              className="btn btn-neutral btn-sm max-sm:hidden"
            >
              Download CV
            </button>
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
