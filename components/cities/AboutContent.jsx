"use client"
import Link from "next/link";
import Image from "next/image";
import arrowIcon from "../../public/images/arrow2.svg";
import officeImg from "../../public/images/officespace-mumbai.jpg";
import thumb1 from "../../public/images/thumb1.jpg";
import thumb2 from "../../public/images/thumb2.jpg";
import styles from "../../styles/about.module.css"
import { motion } from "framer-motion"
const AboutContent = () => {
  return (
    <section className="py100">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-5 col-md-12">
            <div className="imgBox ">
              <Image
                src={officeImg}
                alt="office In Mumbai"
                width={450}
                height={450}
              />
            </div>
          </div>

          <div className="col-lg-7 col-md-12">
            <motion.div
              initial={{ y: 75, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className={styles.aboutContent}
              transition={{ duration: 0.6 }}
            >
              <div className="row justify-content-start align-items-end">
                <div className="col-lg-5 ">
                  <div className={styles.innerImages}>
                    <div className="row g-2">
                      <div className="col-lg-6 col-6">
                        <div className="imgBox ">
                          <Image
                            src={thumb1}
                            alt="office In Mumbai"
                            width={467}
                            height={338}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-6">
                        <div className="imgBox ">
                          <Image
                            src={thumb2}
                            alt="office In Mumbai"
                            width={467}
                            height={338}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className={styles.textBox}>
                    <h2 className={styles.title}>
                      Office space for
                      <br />
                      enterprises in Mumbai
                    </h2>
                    <p className={styles.desc}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>

                    <ul className={styles.list}>
                      <li>
                        <Image
                          src={arrowIcon}
                          alt="arrow"
                          width={28}
                          height={10}
                        />
                        Lorem ipsum dolor sit amet
                      </li>
                      <li>
                        <Image
                          src={arrowIcon}
                          alt="arrow"
                          width={28}
                          height={10}
                        />
                        Sed do eiusmod tempor incididunt ut labore
                      </li>
                      <li>
                        <Image
                          src={arrowIcon}
                          alt="arrow"
                          width={28}
                          height={10}
                        />
                        Risus commodo viverra maecenas
                      </li>
                    </ul>

                    <div className=" pt-4">
                      <Link href="#" className="siteBtn">
                        Know More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutContent