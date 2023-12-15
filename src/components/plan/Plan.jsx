
import style from "./Plan.module.css"

export default function Plan() {
  return (
   <div className={style.OuterContainer}>
    <div className={style.innerContainer}>
        
        <div className={style.textContainer}>
            <div className={style.text}>
                <h1>Choose Your &nbsp;
                <span className={style.planText}>
                Plan
            </span>
              </h1>
            </div>
            <div className={style.smallText}>
                <p> Switch or cancel* anytime.</p>
            </div>
        </div>

        <div className={style.flexContainer}>

            {/* <div className="style.featureContainer">
                <div className={style.feature}>
                <h2>Feature</h2>
                <ul className={style.listFeatureItem}>
                    <li>Ideal For </li>
                    <li>Features</li>
                    <li>Number of Properties</li>
                    <li>Channel management channels </li>
                    <li>Booking Engine (Customizable) </li>
                    <li>API Access</li>
                    <li>Dedicated account manager</li>
                    <li>Priority Support</li>
                 </ul>
                </div>
            </div> */}

<div className={style.featureContainer}>
      <div className={style.featureTitle}>Feature</div>
      <div className={style.featureList}>
        <div className={style.featureItem}>
          <div className={style.featureText}>Ideal for</div>
        </div>
        <div className={style.featureItem}>
          <div className={style.featureText}>Features</div>
        </div>
        <div className={style.featureItem + ' ' + style.stretch}>
          <div className={style.flexItem}>Number of properties</div>
        </div>
        <div className={style.featureItem + ' ' + style.stretch}>
          <div className={style.flexItem}>Channel management channels</div>
        </div>
        <div className={style.featureItem + ' ' + style.stretch}>
          <div className={style.flexItem}>Booking engine (customizable)</div>
        </div>
        <div className={style.featureItem}>
          <div className={style.featureText}>API access</div>
        </div>
        <div className={style.featureItem + ' ' + style.stretch}>
          <div className={style.flexItem}>Dedicated account manager</div>
        </div>
        <div className={style.featureItem + ' ' + style.stretch}>
          <div className={style.flexItem}>Priority support</div>
        </div>
      </div>
    </div>
        
        <div className={style.choosePlan}>
                <h2 className={style.title}>Starter</h2>
                <ul className={style.listItem}>
                    <li>Small business </li>
                    <li>Basic</li>
                    <li>1</li>
                    <li>Upto 10 </li>
                    <li>No</li>
                    <li>No</li>
                    <li>No</li>
                    <li>No</li>
                    <li>Starting at 19 points per month</li>
                 </ul>
                 <div className={style.buttonContainer}>
                <div className={style.buttonText}>
                    Start a Free 14-day trial
                </div>
                </div>
        </div>

        
        <div className={style.choosePlan}>
                <h2 className={style.title}>Pro</h2>
                <ul className={style.listItem}>
                    <li>Growing business </li>
                    <li>Advanced</li>
                    <li>Up to 10 </li>
                    <li>Up to 100 </li>
                    <li>Yes</li>
                    <li>Yes</li>
                    <li>No</li>
                    <li>Yes</li>
                    <li>Starting at 49 points per month</li>
                 </ul>
                 <div className={style.buttonContainer}>
                <div className={style.buttonText}>
                    Talk to Sales
                </div>
                </div>
        </div>

        
        <div className={style.choosePlan}>
                <h2 className={style.title}>Flex</h2>
                <ul className={style.listItem}>
                    <li>Large business </li>
                    <li>Custom</li>
                    <li>Unlimited</li>
                    <li>All channels </li>
                    <li>Yes</li>
                    <li>Yes</li>
                    <li>Yes</li>
                    <li>Yes</li>
                    <li>Starting at 99 points per month</li>
                 </ul>
                 <div className={style.buttonContainer}>
                <div className={style.buttonText}>
                    Talk to sales
                </div>
                </div>
        </div>





     </div>

    </div>

   

   </div>
  )
}
