import { FunctionComponent } from "react";
import styles from "./service.module.css";

export type DetectType = {
  groupPrivacyPolicy?: string;
  detect?: string;
  itClosesAllTheSecuirtyGap?: string;
};

const Service: FunctionComponent<DetectType> = ({
  detect,
  itClosesAllTheSecuirtyGap,
}) => {
  return (
    <div className={styles.detect}>
      <img
        className={styles.buttonConfirmIcon}
        alt=""
        src="/about/vecotr_55.png"
      />
      {/* <img
        className={styles.groupPrivacyPolicy}
        alt=""
        src={groupPrivacyPolicy}
      /> */}
      <div className={styles.groupTermsCondition}>
        <img src="../../../about/vector_44.svg" className={styles.indexSet}/>
        <h1 className={styles.detect1}>{detect}</h1>
        <div className={styles.frameHeader}>
          <div className={styles.itClosesAll}>{itClosesAllTheSecuirtyGap}</div>
        </div>
      </div>
    </div>
  );
};

export default Service;
