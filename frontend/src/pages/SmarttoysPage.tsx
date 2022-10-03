import Header from "../components/Header";
import styles from '../css/smarttoys.module.css'
import threeToys from '../assets/smarttoys/3toys.svg'
import penguin from '../assets/smarttoys/penguin.svg';
import phone from '../assets/smarttoys/phone.svg';

export default function SmarttoysPage() {
    return (
        <>
            <Header />

            <div className={styles.topContainer}>
                <h1 style={{ fontSize: "32px" }}>Vai esi gatavs mainīt pasauli?</h1>
                <p style={{ fontSize: "28px" }}>Varoņu rotaļlietas, kas radītas ar īpašo 3D printera tehnoloģiju!</p>
                <img src={threeToys} />
            </div>

            <div className={styles.middleContainer}>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttons}>Uzzināt Vairāk</button>
                    <button className={styles.buttons}>Iegādāties</button>
                    <div className={styles.textContainer}>
                        <p className={styles.eco}>ECO FRIENDLY</p>
                    </div>
                </div>
            </div>

            <div className={styles.bottomContainer}>
                <div className={styles.imageContainer}>
                    <img src={penguin} />
                </div>

                <div className={styles.infoContainer}>
                    <div className={styles.boxContainer}>
                        <div className={styles.boxes} style={{ color: "#00D959", fontFamily: "tropical_asian_demoregular, sans-serif" }}>
                            ECO-FRIENDLY ENGINEERING <br></br> IN IT
                        </div>
                        <div className={styles.boxes} style={{ fontSize: "20px", fontWeight: "bold" }}>
                            SELF-PAINTED 🎨
                        </div>
                    </div>

                    <div className={styles.infoBoxContainer}>
                        <div className={styles.infoBox}>
                            Minifigūras bērniem, kas radītas ar 3D tehnoloģijām. Pērkot minifigūru, Jūs iegūstat pieeju platformai bērniem - lietotnei C-APP, kas izmantojot minifigūru un Augmentētās realitātes palīdzību ļauj mācīties dažādus mācību priekšmetus, kā matemātiku, latviešu valodu un angļu valodu. Minifigūras bērniem, kas radītas ar 3D tehnoloģijām. Pērkot minifigūru, Jūs iegūstat pieeju platformai bērniem - lietotnei C-APP, kas izmantojot minifigūru un Augmentētās realitātes palīdzību ļauj mācīties dažādus mācību priekšmetus, kā matemātiku, latviešu valodu un angļu valodu.
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.bottomContainer2}>
                <div className={styles.bottomContBoxes} style={{paddingRight: '50px'}}>Minifigūras ir rotaļlietas<br/> bērniem - mazi personāži,<br/> ar ko bērni var spēlēties.</div>
                <div className={styles.bottomContBoxes}>Minifigūra, kopā ar lietoni C-APP, dod iespēju izmeiģināt jaunu bērnu mācīšanās veidu - mācoties spēlējoties.</div>

            </div>

            <div className={styles.bottomContainer2}>
                <div className={styles.bottomContBoxes}>SmartToys un C-APP paredzēta bērniem no 4 - 8 gadiem. Ja Jūsu bērns uzsāk skolu, tad tas būs lielisks rīks, lai atkārtotu kādas zināšanas iegūtas bērnudārzā.</div>
                <div className={styles.bottomContBoxes}>Šī platforma bērniem ir lieliska iespēja izmēģināt, ko jaunu - izmēģināt jaunākās tehnoloģijas un dot bērnam zināšanas mācību priekšmetos.</div>
            </div>
        </>
    )
}