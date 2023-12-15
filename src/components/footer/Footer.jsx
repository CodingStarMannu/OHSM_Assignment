
import styles from "./Footer.module.css"; 
const Footer = () => {
  return (
    <div className={styles.footer}>
        
      <div className={styles.columns}>

        <div className={styles.footerComponents}>

          <div className={styles.footerComponents2}>
            <div className={styles.textWrapper2}>Categories</div>
          </div>
          <div className={styles.links}>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>User Interface</div>
            </div>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>User Experience</div>
            </div>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>Digital Media</div>
            </div>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>LifeStyle</div>
            </div>
          </div>
        </div>

        {/* Product */}
        <div className={styles.footerComponents}>
          <div className={styles.footerComponents2}>
            <div className={styles.textWrapper2}>Product</div>
          </div>
          <div className={styles.links}>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>Pricing</div>
            </div>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>OverView</div>
            </div>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>Browse</div>
            </div>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>Accessibility <span>BETA</span> </div>
            </div>
          </div>
        </div>

        {/* Solutions */}
        <div className={styles.footerComponents}>
          <div className={styles.footerComponents2}>
            <div className={styles.textWrapper2}>Solutions</div>
          </div>
          <div className={styles.links}>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>Brainstorming</div>
            </div>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>Ideation</div>
            </div>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>Wireframing</div>
            </div>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>Research</div>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className={styles.footerComponents}>
          <div className={styles.footerComponents2}>
            <div className={styles.textWrapper2}>Resources</div>
          </div>
          <div className={styles.links}>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>Help Center</div>
            </div>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>Blog</div>
            </div>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>Tutorials</div>
            </div>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>FAQs</div>
            </div>
          </div>
        </div>

        {/* Support */}
        <div className={styles.footerComponents}>
          <div className={styles.footerComponents2}>
            <div className={styles.textWrapper2}>Support</div>
          </div>
          <div className={styles.links}>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>Contact Us</div>
            </div>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>Developers</div>
            </div>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>Documentation</div>
            </div>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>Integrations</div>
            </div>
          </div>
        </div>

        {/* Company */}
        <div className={styles.footerComponents}>
          <div className={styles.footerComponents2}>
            <div className={styles.textWrapper2}>Company</div>
          </div>
          <div className={styles.links}>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>About</div>
            </div>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>Press</div>
            </div>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>Events</div>
            </div>
            <div className={styles.footerComponents2}>
              <div className={styles.textWrapper3}>Request Demo</div>
            </div>
          </div>
        </div>


        
      </div>

      <div className={styles.bottom}>
        <div className={styles.textWrapper5}>OHSM @ 2023</div>

        {/* Legal Links */}
        <div className={styles.footerComponents3}>
          <div className={styles.footerComponents4}>
            <div className={styles.textWrapper3}>Terms of Service</div>
          </div>
          <div className={styles.footerComponents4}>
            <div className={styles.textWrapper3}>Privacy Policy</div>
          </div>
          <div className={styles.footerComponents4}>
            <div className={styles.textWrapper3}>Manage Cookies</div>
          </div>
        </div>
        <img
          className={styles.img}
          alt="Footer components"
          src="https://cdn.animaapp.com/projects/657325771096a86e72f38f9d/releases/65733b25df8c3c94cf99e0b9/img/footer-components-social-icons-3@2x.png"
        />
        <div className={styles.appDownload}>
          <img
            className={styles.img}
            alt="Button"
            src="https://cdn.animaapp.com/projects/657325771096a86e72f38f9d/releases/65733b25df8c3c94cf99e0b9/img/button-3@2x.png"
          />
        </div>
        <div className={styles.appDownload}>
          <img
            className={styles.img}
            alt="Button"
            src="https://cdn.animaapp.com/projects/657325771096a86e72f38f9d/releases/65733b25df8c3c94cf99e0b9/img/button-3@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
