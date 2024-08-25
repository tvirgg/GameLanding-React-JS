import React from 'react';
import "./Roadmap.css";
import piki from "../images/piki.png";
import first_gear from "../images/gear_road_fst.png";
import gear_road_sec from "../images/gear_road_sec.png";
import sec_knight from "../images/sec_knight.png";
import main from "../images/render_main.png";
import blood from "../images/blood.png";
import third_knight from "../images/third_knight.png";
import gear_road_middle  from "../images/gear_road_middle.png";
import blood_nearfooter from "../images/blood_nearfooter.png";
const Roadmap = () => {

    return (<div className="Roadmap">
            <div className="roadmap_container first">
                <img className="Rroadmap_item__contain_first_gear" src={first_gear} alt="Kingnight"/>
                <div className="Rroadmap_item__contain">
                    <div className="Rroadmap_item__contain_left">
                        <h1 className="Rroadmap_item__contain_left_h1">
                            ROADMAP
                        </h1>
                        <p  className="Rroadmap_item__contain_left_p">
                            This roadmap outlines the ambitious journey of Kingnight, showcasing the milestones we aim to achieve. Kingnight is not just a game but a fully immersive world that will continue to grow and evolve!
                        </p>
                    </div>
                    <div className="Rroadmap_item__contain_right">
                        <img className="Rroadmap_item__contain_right_photo" src={main} alt="Kingnight"/>
                    </div>
                </div>
            </div>
            <div className="roadmap_container white">
                <div className="Rroadmap_item__contain">
                    <div className="Rroadmap_item__contain_left_sec">
                        <h1 className="Rroadmap_item__contain_left_h1">
                            <span className="Rroadmap_item__contain_left_span">01</span>LAUNCH
                        </h1>
                        <div className="Roadmap_second_electro">
                            <p className="Roadmap_second_electro_p">
                                We will kickstart the project by preparing our online platforms for a surge of new players. Our marketing campaign will ensure that the gaming community takes notice of Kingnight. We will also engage with our community to build a strong, connected player base.
                            </p>
                            <p className="Roadmap_second_electro_p sec">
                                - Launch of a new website<br></br>
                                - Introduction of 7777 unique Knights<br></br>
                                - Fully optimized social media<br></br>
                                - Community engagement through AMA sessions<br></br>
                                - Aggressive marketing campaign<br></br>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="roadmap_container">
                <div className="Rroadmap_item__contain">
                    <div className="Rroadmap_item__contain_left_sec">
                        <h1 className="Rroadmap_item__contain_left_h1">
                            <span className="Rroadmap_item__contain_left_span">02</span>RELEASE
                        </h1>
                        <div className="Roadmap_second_electro Roadmap_second_electro_rep">
                            <p className="Roadmap_second_electro_p Roadmap_second_electro_p_sec">
                                With our developers' expertise, we've optimized our servers to handle high traffic, ensuring a smooth release. When the game goes live, a link will be shared in our Discord, and players will instantly receive their personalized Knights, each with unique traits and rarities.
                            </p>
                        </div>
                    </div>
                    <div className="Rroadmap_item__contain_right_sec">
                        <img className="Rroadmap_item__contain_right_photo_sec" src={piki} alt="Kingnight"/>
                    </div>
                </div>
            </div>
            <div className="roadmap_container white zip">
                <div className="Rroadmap_item__contain">
                    <div className="Rroadmap_item__contain_left_sec">
                        <h1 className="Rroadmap_item__contain_left_h1">
                            <span className="Rroadmap_item__contain_left_span">03</span>GAME DEVELOPMENT
                        </h1>
                        <img className="Rroadmap_item__contain_left_h1 h1_sec sec_knight" src={sec_knight} alt=""/>
                        <div className="Roadmap_second_electro">
                            <p className="Roadmap_second_electro_p Roadmap_second_electro_p_sec">
                                The Kingnight game will be built using Unreal Engine 5, delivering cutting-edge graphics and immersive gameplay. Players will engage in thrilling battles, form clans, and strategize in real-time, all within the stunning universe of Kingnight. The game will allow for deep integration with all collections in the Kingnight universe.
                            </p>
                        </div>
                    </div>
                </div>
                <img src={blood} className="sec_imglastblood"/>
                <img src={gear_road_middle} className="gear_road_middle"/>
            </div>
            <div className="roadmap_container">
                <div className="Rroadmap_item__contain">
                    <div className="Rroadmap_item__contain_coinmap">
                        <img className="Rroadmap_item__contain_left_h1 h1_sec sec_knight sec_knight_last" src={third_knight} alt=""/>
                        <div className="top_right_better">
                            <h1 className="Rroadmap_item__contain_left_h1_end">
                                ECONOMY
                            </h1>
                            <h1 className="Rroadmap_item__contain_left_h1_end num">
                                04
                            </h1>
                        </div>
                        <div className="Roadmap_second_electro">
                            <p className="Roadmap_second_electro_p Roadmap_second_electro_p_sec Roadmap_second_electro_coin">
                                The Kingnight economy will be powered by our in-game currency. Players will use this currency to trade, earn rewards, and invest. The currency will play a crucial role in our metaverse, influencing the future of the game and ensuring long-term sustainability.
                            </p>
                        </div>
                    </div>
                </div>
                    <img src={gear_road_sec} className="sec_imglast"/>
            </div>
            <div className="roadmap_container white">
                <div className="Rroadmap_item__contain">
                    <div className="Rroadmap_item__contain_left_sec">
                        <h1 className="Rroadmap_item__contain_left_h1">
                            <span className="Rroadmap_item__contain_left_span">05</span>METAVERSE EXPANSION
                        </h1>
                        <div className="Roadmap_second_electro">
                            <p className="Roadmap_second_electro_p Roadmap_second_electro_p_sec">
                                Our ultimate goal is to integrate Kingnight into the broader metaverse or even create our own. We envision Kingnight as more than just a game; it will be a fully immersive world where players can live, interact, and thrive. We are committed to building a robust virtual infrastructure that will support a vibrant economy and culture within the Kingnight universe.
                            </p>
                        </div>
                    </div>
                </div>
                <img src={blood_nearfooter} className="blood_nearfooter"/>
            </div>
        </div>
        )
    };

export default Roadmap;
