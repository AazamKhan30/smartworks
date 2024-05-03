import Link from "next/link";


const CenterBanner = () => {


  return (
    <section className="py100 vh-100 d-flex bgImg centerBanner align-items-center"   style={{
        backgroundImage: `url("../../images/centerBanner.jpg")`,
      }}>
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="sectionHeader px-3">
              <div className="sectionTitle">
                <span>Andheri East</span>
                <h2 className="mb-3 text-white">
                Times Square <br/>Building
                </h2>
                <p className="text-white">
                With Smartworks, you can rent office space in one of Mumbai’s most coveted IT and business hubs - Times Square in Andheri East. This gold-rated, LEED-certified private IT park offers exciting options for enterprises and businesses looking for a prestigious office.
                </p>
                <p className="text-white">With Smartworks, you can set up an office of the future with state-of-the-art meeting rooms, recreational spaces, including reserved parking, power back up and more. We also offer fitness studios and gaming zones, replete with PS4 and foosball tables. This way, your employees can achieve the work-life balance they need. </p>
                <Link href="#" className="siteBtn mt-3">Get Started</Link>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CenterBanner