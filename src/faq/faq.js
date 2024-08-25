import React from 'react';
import "./faq.css";
import Faq from 'react-faq-component';
const Faq_contaINER = () => {
    const data = {
        title: "",
        rows: [
        {
            title: "Who are YOU?",
            content: "We're Kingnight - a team of dedicated game developers. We are focused on creating an immersive gaming experience that stands out in the industry."
        },
        {
            title: "Why should I choose you?",
            content: "We have carefully analyzed the gaming market and identified that our product is among the strongest. With a history of successful projects and a clear vision, we are confident that Kingnight offers a unique and engaging experience that sets us apart from the competition."
        },
        { title: "What's your experience?",
            content: "Our team is growing rapidly, with each member bringing valuable experience from major gaming projects such as STALKER 2, METRO EXODUS, WORLD OF TANKS, CROSSOUT, GWENT, JUST CAUSE 3, and others. This extensive experience allows us to deliver a high level of detail and quality in our game." },
        { title: "What about your audience?",
            content: "We have always placed great importance on our community. Through thick and thin, we've learned that open communication and feedback are key to our success. Our community is the backbone of Kingnight, and we are committed to listening and engaging with our players. Thank you for being with us." },
        { title: "What does the future hold for Kingnight: Origin?",
            content: "As our first game project, Kingnight: Origin holds significant value. It will be integrated into all future Kingnight universe projects, ensuring its legacy and continued relevance. Those who have been with us from the start will see the long-term benefits of their involvement." },
        { title: "What is Kingnight: Evolved collection?",
            content: "Building on the success of Kingnight: Origin, we are excited to introduce the Kingnight: Evolved collection. This new phase will bring even higher quality and detail, pushing the boundaries of what's possible in gaming. Kingnight: Evolved will play a crucial role in expanding the Kingnight universe, connecting with the original while introducing new elements and features that will elevate the entire experience." },
        { title: "A burning system? What is it?",
            content: "To maintain balance and exclusivity within our game, we are introducing a unique system where players can trade in older items or characters for new, more powerful ones. This system allows for strategic upgrades while keeping the game dynamic and exciting." },
        { title: "What will be the price for in-game items?",
            content: "We are committed to ensuring that our game is accessible to everyone. Pricing for in-game items will vary depending on their rarity and value, with some items available at discounted rates for early supporters." },
        { title: "What is this game all about?",
            content: "Kingnight is an action-packed game built on Unreal Engine 5. Players will engage in intense battles, form alliances, and explore a richly detailed world. The game will integrate all collections from the Kingnight universe, offering a seamless experience where you can bring your favorite characters into the fray. We're also planning to expand the game into a full-fledged metaverse, with more details coming soon." },
        { title: "How will the rarity of my items affect gameplay?",
            content: "In Kingnight, the rarity of your items will have a direct impact on gameplay. Rare items will enhance your character's abilities, such as armor durability, weapon effectiveness, and overall performance in battles. The rarer your item, the more powerful your character will be in the game." },
        { title: "When is the game coming?",
            content: "Game development is a complex and time-consuming process. We expect to make a full announcement about the game's release in Q2 2025. The success of the project depends on the continued support of our community, so stay tuned for updates and help spread the word!" },
        { title: "What is Kingnight COIN?",
            content: "The in-game economy will be based on a proprietary currency that players can use to trade, upgrade, and interact within the game world. This currency will be integral to the gameplay experience, facilitating transactions and enhancing the overall immersion in the Kingnight universe." },
        { title: "When will the Kingnight: Evolved release be?",
                content: "March 4-5, 2025" },

    ]};
    return (<div className="faq zindex">
                <div className="team__wrap">
                    <div className="team_h1">
                        FAQ’S
                    </div>
                    <div className="team__container">
                        <Faq data={data}
                             styles={{
                            bgColor: "#48484A00",
                            titleTextColor: "#ffffff",
                            rowTitleColor: "#ffffff",
                            rowTitleTextSize: 'large',
                            rowContentColor: "#ffffff",
                            rowContentTextSize: '16px',
                            rowContentPaddingTop: '10px',
                            rowContentPaddingBottom: '10px',
                            rowContentPaddingLeft: '50px',
                            rowContentPaddingRight: '150px',
                            arrowColor: "white",
                        }}
                             config={{
                                 arrowIcon: "+",
                             }}/>
                    </div>
                </div>
            </div>
        )
    };

export default Faq_contaINER;
