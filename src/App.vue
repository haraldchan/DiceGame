<template>
    <div>
        <!-- game start page -->
        <b-jumbotron
            class="bg-dark"
            :class="[!jumboDismiss ? 'jumbo' : 'inactive']"
            style="border-bottom: 1px solid lightskyblue"
            fluid
        >
            <template #header
                >Dice Game <br />
                <h3 class="font-weight-lighter mb-4">- Versus -</h3>
            </template>
            <template #lead>
                <div class="font-weight-light">
                    A dice game inspired by the Tobaku Mokushiroku Kaiji, with a
                    simplified rule of
                    <span class="toppan">「チンチロリン」</span> for 2 players.
                </div>
            </template>
            <div class="zawa text-muted" style="height: 0">
                <p style="left: 518px; top: -210px; font-size: 39px">ざわ…</p>
                <p style="left: 479px; top: -239px; font-size: 22px">ざわ…</p>
                <p style="left: 583px; top: -344px; font-size: 20px">ざわ…</p>
                <p style="left: 623px; top: -341px; font-size: 18px">ざわ…</p>
            </div>
            <hr class="my-3" />
            <p class="text-muted">
                Powered by Vue.js, Vuex, and BootStrapVue. Created by Harald.C
            </p>
            <div class="btn">
                <b-button variant="info" class="mr-3" @click="toggle('Jumbo')"
                    >ゲーム開始</b-button
                >
                <b-button
                    variant="secondary"
                    data-toggle="modal"
                    data-target="#ruleModal"
                    >ルール説明</b-button
                >
            </div>
        </b-jumbotron>
        <!-- nav bar -->
        <b-navbar
            toggleable="lg"
            type="dark"
            variant="dark"
            style="border-bottom: 1px solid rgb(135, 206, 250, 0.3)"
        >
            <b-navbar-brand href="#">
                <h4 class="font-weight-light" style="margin: 0; padding: 0">
                    &nbsp; Dice Game
                    <span class="font-weight-lighter">- Versus -</span>
                </h4>
            </b-navbar-brand>
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-button
                        class="my-2 my-sm-0"
                        variant="outline-info"
                        data-toggle="modal"
                        data-target="#ruleModal"
                        >ルール説明</b-button
                    >
                </b-nav-form>
            </b-navbar-nav>
        </b-navbar>
        <!-- rule modal -->
        <div
            class="modal fade"
            id="ruleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="ruleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog" role="document">
                <div class="modal-content text-dark">
                    <div class="modal-header">
                        <h5 class="modal-title">ルール説明</h5>
                        <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <ul>
                            <!-- ピンゾロ -->
                            <li>
                                <div class="title">ピンゾロ</div>
                                <div class="dice-type">
                                    <div class="dice-box">
                                        <div class="row"></div>
                                        <div class="row center">
                                            <div class="red-dot"></div>
                                        </div>
                                        <div class="row between"></div>
                                    </div>
                                    <div class="dice-box">
                                        <div class="row"></div>
                                        <div class="row center">
                                            <div class="red-dot"></div>
                                        </div>
                                        <div class="row between"></div>
                                    </div>
                                    <div class="dice-box">
                                        <div class="row"></div>
                                        <div class="row center">
                                            <div class="red-dot"></div>
                                        </div>
                                        <div class="row between"></div>
                                    </div>
                                </div>
                                <div class="rate-info toppan">5 倍づけ、即勝ち</div>
                            </li>
                            <!-- ゾロ目 -->
                            <li>
                                <div class="title">ゾロ目</div>
                                <div class="dice-type">
                                    <div class="dice-box">
                                        <div class="row between">
                                            <div class="dot"></div>
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row between">
                                            <div class="dot"></div>
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row between">
                                            <div class="dot"></div>
                                            <div class="dot"></div>
                                        </div>
                                    </div>
                                    <div class="dice-box">
                                        <div class="row between">
                                            <div class="dot"></div>
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row between">
                                            <div class="dot"></div>
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row between">
                                            <div class="dot"></div>
                                            <div class="dot"></div>
                                        </div>
                                    </div>
                                    <div class="dice-box">
                                        <div class="row between">
                                            <div class="dot"></div>
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row between">
                                            <div class="dot"></div>
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row between">
                                            <div class="dot"></div>
                                            <div class="dot"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="rate-info toppan">3 倍づけ、即勝ち</div>
                            </li>
                            <!-- シゴロ -->
                            <li>
                                <div class="title">シゴロ</div>
                                <div class="dice-type">
                                    <div class="dice-box">
                                        <div class="row between">
                                            <div class="dot"></div>
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row"></div>
                                        <div class="row between">
                                            <div class="dot"></div>
                                            <div class="dot"></div>
                                        </div>
                                    </div>
                                    <div class="dice-box">
                                        <div class="row between">
                                            <div class="dot"></div>
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row center">
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row between">
                                            <div class="dot"></div>
                                            <div class="dot"></div>
                                        </div>
                                    </div>
                                    <div class="dice-box">
                                        <div class="row between">
                                            <div class="dot"></div>
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row between">
                                            <div class="dot"></div>
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row between">
                                            <div class="dot"></div>
                                            <div class="dot"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="rate-info toppan">2 倍づけ、即勝ち</div>
                            </li>
                            <!-- divider -->
                            <li
                                class="my-3"
                                style="height: 0; border: 1px solid #efefef"
                            ></li>
                            <!-- 通常の目 -->
                            <li>
                                <div class="title">通常の目</div>
                                <div class="dice-type">
                                    <div
                                        class="dice-box"
                                        style="border: 5px solid red"
                                    >
                                        <div class="row between">
                                            <div class="dot"></div>
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row between">
                                            <div class="dot"></div>
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row between">
                                            <div class="dot"></div>
                                            <div class="dot"></div>
                                        </div>
                                    </div>
                                    <div class="dice-box">
                                        <div class="row right">
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row center">
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row left">
                                            <div class="dot"></div>
                                        </div>
                                    </div>
                                    <div class="dice-box">
                                        <div class="row right">
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row center">
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row left">
                                            <div class="dot"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="rate-info toppan">1 倍づけ</div>
                                <span
                                    style="
                                        padding: 3px 0;
                                        font-size: 12px;
                                        margin-left: 24px;
                                        line-height: 14px;
                                    "
                                    >勝てば<br />
                                    張った分だけ取り<br />
                                    違う数字の目で勝負</span
                                >
                            </li>
                            <!-- divider -->
                            <li
                                class="my-3"
                                style="height: 0; border: 1px solid #efefef"
                            ></li>
                            <!-- 目なし -->
                            <li>
                                <div class="title">目なし</div>
                                <div class="dice-type">
                                    <div class="dice-box">
                                        <div class="row between">
                                            <div class="dot"></div>
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row center">
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row between">
                                            <div class="dot"></div>
                                            <div class="dot"></div>
                                        </div>
                                    </div>
                                    <div class="dice-box">
                                        <div class="row"></div>
                                        <div class="row center">
                                            <div class="red-dot"></div>
                                        </div>
                                        <div class="row between"></div>
                                    </div>
                                    <div class="dice-box">
                                        <div class="row right">
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row center">
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row left">
                                            <div class="dot"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="rate-info toppan">1 倍払い</div>
                                <span
                                    style="
                                        padding: 12px 0;
                                        font-size: 12px;
                                        margin-left: 24px;
                                        line-height: 14px;
                                    "
                                    >負ければ<br />張った分だけ取られる</span
                                >
                            </li>
                            <!-- ヒフミ -->
                            <li>
                                <div class="title">ヒフミ</div>
                                <div class="dice-type">
                                    <div class="dice-box">
                                        <div class="row"></div>
                                        <div class="row center">
                                            <div class="red-dot"></div>
                                        </div>
                                        <div class="row between"></div>
                                    </div>
                                    <div class="dice-box">
                                        <div class="row right">
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row"></div>
                                        <div class="row left">
                                            <div class="dot"></div>
                                        </div>
                                    </div>
                                    <div class="dice-box">
                                        <div class="row right">
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row center">
                                            <div class="dot"></div>
                                        </div>
                                        <div class="row left">
                                            <div class="dot"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="rate-info toppan">2 倍払い、即負け</div>
                            </li>
                        </ul>
                    </div>
                    <div class="modal-footer">
                        <button
                            type="button"
                            class="btn btn-secondary"
                            data-dismiss="modal"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- rolling dices -->
        <div class="container">
            <!-- rolling dices -->
            <div class="box">
                <DiceBox ref="dicebox1"></DiceBox>
                <DiceBox ref="dicebox2"></DiceBox>
                <DiceBox ref="dicebox3"></DiceBox>
            </div>
            <!-- players panel -->
            <div
                class="box"
                style="margin-top: 20px; padding: 20px; height: 350px"
            >
                <PlayerCard ref="player1" @rollApp="rollApp"></PlayerCard>
                <PlayerCard ref="player2" @rollApp="rollApp"></PlayerCard>
            </div>
            <!-- mask -->
            <div
                class="mask"
                :class="{ active: isActiveWinLose || isActiveVersus }"
            ></div>
            <!-- WinLoseModal -->
            <WinLoseModal
                :turnResult="turnResult"
                :isActiveWinLose="isActiveWinLose"
                @toggle="toggle"
            >
            </WinLoseModal>
            <!-- VersusModal -->
            <VersusModal
                :turnResult="turnResult"
                :isActiveVersus="isActiveVersus"
                @toggle="toggle"
            ></VersusModal>
            <!-- GameOver -->
            <GameOver
                :isActiveGameOver="isActiveGameOver"
                @toggle="toggle"
                @resetModals="resetModals"
                ></GameOver>
            <!-- Final's result -->
            <FinalResult
                :isActiveFinal="isActiveFinal"
                @toggle="toggle"
            ></FinalResult>
        </div>
    </div>
</template>

<script>
import DiceBox from "./components/DiceBox.vue";
import PlayerCard from "./components/PlayerCard.vue";
import WinLoseModal from "./components/WinLoseModal.vue";
import VersusModal from "./components/VersusModal.vue";
import GameOver from "./components/GameOver.vue";
import FinalResult from "./components/FinalResult.vue";

export default {
    name: "App",
    components: {
        DiceBox,
        PlayerCard,
        WinLoseModal,
        VersusModal,
        GameOver,
        FinalResult,
    },
    data() {
        return {
            disabled: false,
            inputDisabled: false,
            active: {
                display: "block",
            },
            isActiveWinLose: false,
            isActiveVersus: false,
            isActiveGameOver: false,
            isActiveFinal: false,
            jumboDismiss: false,
            turnResult: {
                kachiMake: "",
                player: "",
                displayData: [{}, {}],
            },
        };
    },
    methods: {
        rollApp() {
            this.turnResult = {
                displayData: [{ bet: 0 }, { shoubu: 0 }],
            };
            this.$refs.dicebox1.roll(1000);
            this.$refs.dicebox2.roll(1800);
            this.$refs.dicebox3.roll(2600);
            setTimeout(() => {
                let playerOneRes,
                    playerTwoRes = {};
                // instant win/lose hantei
                let firstRes = JSON.parse(this.$store.state.resultPool[0]);
                if (
                    firstRes["hantei"] === "ピンゾロ！" ||
                    firstRes["hantei"] === "ゾロ目！！" ||
                    firstRes["hantei"] === "シゴロ！！"
                ) {
                    if (firstRes["player"] === "Player 1") {
                        this.$store.commit("turnChange", firstRes["player"]);
                        console.log("Player 1 WINS!!!");
                        this.turnResult = {
                            kachiMake: "WIN",
                            player: firstRes["player"],
                            displayData: [firstRes],
                        };
                        this.detameCount();
                        this.toggle("WinLose");
                        this.$store.commit("instantEnd");
                        return;
                    } else {
                        this.$store.commit("turnChange", firstRes["player"]);
                        console.log("Player 2 WINS!!!");
                        this.turnResult = {
                            kachiMake: "WIN",
                            player: firstRes["player"],
                            displayData: [firstRes],
                        };
                        this.detameCount();
                        this.toggle("WinLose");
                        this.$store.commit("instantEnd");
                        return;
                    }
                } else if (firstRes["hantei"] === "ヒフミ！！") {
                    if (firstRes["player"] === "Player 1") {
                        console.log("Player 1 LOSES!!!");
                        this.turnResult = {
                            kachiMake: "LOSE",
                            player: firstRes["player"],
                            displayData: [firstRes],
                        };
                        this.detameCount();
                        this.toggle("WinLose");
                        return;
                    } else {
                        console.log("Player 2 LOSES!!!");
                        this.turnResult = {
                            kachiMake: "WIN",
                            player: firstRes["player"],
                            displayData: [firstRes],
                        };
                        this.detameCount();
                        this.toggle("WinLose");
                        return;
                    }
                }
                // after instant(second player rolled)
                if (this.$store.state.resultPool.length === 2) {
                    let secondRes = JSON.parse(this.$store.state.resultPool[1]);
                    if (firstRes["player"] === "Player 1") {
                        playerOneRes = firstRes;
                        playerTwoRes = secondRes;
                    } else {
                        playerOneRes = secondRes;
                        playerTwoRes = firstRes;
                    }
                    console.table(playerOneRes);
                    console.table(playerTwoRes);
                    // instant win hantei
                    if (
                        playerOneRes["hantei"] === "ピンゾロ！" ||
                        playerOneRes["hantei"] === "ゾロ目！！" ||
                        playerOneRes["hantei"] === "シゴロ！！"
                    ) {
                        this.$store.commit(
                            "turnChange",
                            playerOneRes["player"]
                        );
                        console.log("Player 1 WINS!!");
                        this.turnResult = {
                            kachiMake: "WIN",
                            player: playerOneRes["player"],
                            displayData: [playerOneRes, playerTwoRes],
                        };
                        this.detameCount();
                        this.toggle("WinLose");
                        return;
                    } else if (
                        playerTwoRes["hantei"] === "ピンゾロ！" ||
                        playerTwoRes["hantei"] === "ゾロ目！！" ||
                        playerTwoRes["hantei"] === "シゴロ！！"
                    ) {
                        this.$store.commit(
                            "turnChange",
                            playerTwoRes["player"]
                        );
                        console.log("Player 2 WINS!!");
                        this.turnResult = {
                            kachiMake: "WIN",
                            player: playerTwoRes["player"],
                            displayData: [playerTwoRes, playerOneRes],
                        };
                        this.detameCount();
                        this.toggle("WinLose");
                        return;
                    }
                    // instant lose hantei
                    if (playerOneRes["hantei"] === "ヒフミ！！") {
                        this.$store.commit(
                            "turnChange",
                            playerTwoRes["player"]
                        );
                        console.log("Player 1 LOSES!!");
                        this.turnResult = {
                            kachiMake: "LOSE",
                            player: playerOneRes["player"],
                            displayData: [playerOneRes, playerTwoRes],
                        };
                        this.detameCount();
                        this.toggle("WinLose");
                        return;
                    } else if (playerTwoRes["hantei"] === "ヒフミ！！") {
                        this.$store.commit(
                            "turnChange",
                            playerOneRes["player"]
                        );
                        console.log("Player 2 LOSES!!");
                        this.turnResult = {
                            kachiMake: "LOSE",
                            player: playerTwoRes["player"],
                            displayData: [playerTwoRes, playerOneRes],
                        };
                        this.detameCount();
                        this.toggle("WinLose");
                        return;
                    }
                    // shoubu no me win/lose & menashi draw
                    // tsujo shoubu
                    if (
                        playerOneRes["hantei"] === "通常の目" &&
                        playerTwoRes["hantei"] === "通常の目"
                    ) {
                        if (playerOneRes["shoubu"] > playerTwoRes["shoubu"]) {
                            this.$store.commit(
                                "turnChange",
                                playerOneRes["player"]
                            );
                            console.log("Player 1 WINS!!");
                            this.turnResult = {
                                kachiMake: "WIN",
                                player: playerOneRes["player"],
                                displayData: [playerOneRes, playerTwoRes],
                            };
                            this.detameCount();
                            this.toggle("Versus");
                            return;
                        } else if (
                            playerOneRes["shoubu"] < playerTwoRes["shoubu"]
                        ) {
                            this.$store.commit(
                                "turnChange",
                                playerTwoRes["player"]
                            );
                            console.log("Player 2 WINS!!");
                            this.turnResult = {
                                kachiMake: "WIN",
                                player: playerTwoRes["player"],
                                displayData: [playerOneRes, playerTwoRes],
                            };
                            this.detameCount();
                            this.toggle("Versus");
                            return;
                        } else {
                            console.log("Draw");
                            this.turnResult.kachiMake = "DRAW";
                            this.turnResult = {
                                kachiMake: "DRAW",
                                player: "",
                                displayData: [playerOneRes, playerTwoRes],
                            };
                            this.detameCount();
                            this.toggle("WinLose");
                            return;
                        }
                        // menashi draw
                    } else if (
                        playerOneRes["hantei"] === "目なし" &&
                        playerTwoRes["hantei"] === "目なし"
                    ) {
                        console.log("Draw");
                        this.turnResult = {
                            kachiMake: "DRAW",
                            player: "",
                            displayData: [playerOneRes, playerTwoRes],
                        };
                        this.detameCount();
                        this.toggle("WinLose");
                        return;
                    }
                    //tsujo vs menashi
                    if (
                        playerOneRes["hantei"] === "通常の目" &&
                        playerTwoRes["hantei"] === "目なし"
                    ) {
                        this.$store.commit(
                            "turnChange",
                            playerOneRes["player"]
                        );
                        console.log("Player 1 WINS!!");
                        this.turnResult = {
                            kachiMake: "WIN",
                            player: playerOneRes["player"],
                            displayData: [playerOneRes, playerTwoRes],
                        };
                        this.detameCount();
                        this.toggle("WinLose");
                        return;
                    } else if (
                        playerTwoRes["hantei"] === "通常の目" &&
                        playerOneRes["hantei"] === "目なし"
                    ) {
                        this.$store.commit(
                            "turnChange",
                            playerTwoRes["player"]
                        );
                        console.log("player 2 WINS!!");
                        this.turnResult = {
                            kachiMake: "WIN",
                            player: playerTwoRes["player"],
                            displayData: [playerTwoRes, playerOneRes],
                        };
                        this.detameCount();
                        this.toggle("WinLose");
                        return;
                    }
                }
            }, 3100);
        },
        toggle(modal) {
            switch (modal) {
                case "WinLose":
                    this.isActiveWinLose = !this.isActiveWinLose;
                    break;
                case "Versus":
                    this.isActiveVersus = !this.isActiveVersus;
                    break;
                case "GameOver":
                    this.isActiveGameOver = !this.isActiveGameOver;
                    break;
                case "Final":
                    this.isActiveFinal = !this.isActiveFinal;
                    break;
                case "Jumbo":
                    this.jumboDismiss = true;
                    this.$refs.player1.playerName = "Player 1";
                    this.$refs.player2.playerName = "Player 2";
                    break;
            }
        },
        resetModals(){
            this.isActiveWinLose = this.isActiveVersus = this.isActiveGameOver = false
        },
        detameCount() {
            if (this.turnResult.displayData.length === 1) {
                if (this.turnResult.player === "Player 1") {
                    this.$store.commit(
                        "finalUpdateP1",
                        this.turnResult.displayData[0]["hantei"]
                    );
                } else {
                    this.$store.commit(
                        "finalUpdateP2",
                        this.turnResult.displayData[0]["hantei"]
                    );
                }
            } else {
                this.$store.commit(
                    "finalUpdateP1",
                    this.turnResult.displayData[0]["hantei"]
                );
                this.$store.commit(
                    "finalUpdateP2",
                    this.turnResult.displayData[1]["hantei"]
                );
            }
        },
    },
    computed: {
        playerOnePoints() {
            return this.$store.state.playerOneStatus.points;
        },
        playerTwoPoints() {
            return this.$store.state.playerTwoStatus.points;
        },
    },
    watch: {
        playerOnePoints(val) {
            if (val <= 0) {
                // Active GameOver modal when point depleted.
                this.isActiveGameOver = !this.isActiveGameOver;
            }
        },
        playerTwoPoints(val) {
            if (val <= 0) {
                this.isActiveGameOver = !this.isActiveGameOver;
            }
        },
    },
    mounted() {
        document.body.classList.add("bg-dark");
        document.body.classList.add("text-white");
    },
    destroyed() {
        document.body.classList.remove("bg-dark");
    },
};
</script>

<style scoped>
.toppan {
    font-family: "Toppan Bunkyu Midashi Mincho";
    font-weight: bolder;
}

/* Jumbotron */
.jumbo {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 101vh;
    z-index: 99;
}

.inactive {
    position: fixed;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99;
    animation-name: start;
    animation-duration: 0.7s;
    animation-fill-mode: forwards;
}
@keyframes start {
    0% {
        top: 0;
    }
    100% {
        top: -100%;
    }
}

.jumbo hr {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    padding: 0;
}

.zawa p {
    position: relative;
    font-size: 20px;
}

/* public */
li {
    list-style: none;
}

ul {
    padding: 0;
}

.container {
    width: 600px;
    margin: 45px auto;
}

.box {
    display: flex;
    height: 200px;
    width: 600px;
    border-radius: 30px;
    border: 1px solid lightskyblue;
    justify-content: space-between;
    align-items: center;
}

.mask {
    display: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.7;
}

.active {
    display: block;
}

/* === modal dice boxes === */
.modal-body ul {
    display: flex;
    flex-direction: column;
}

.modal-body li {
    display: flex;
    height: 50px;
    justify-content: flex-start;
    line-height: 50px;
}

.modal-body dice-type {
    display: flex;
}

.title {
    font-family: "Toppan Bunkyu Midashi Mincho";
    font-weight: bolder;
    width: 100px;
    font-size: 20px;
}

.rate-info {
    margin-left: 140px;
    font-size: 20px;
}

.dice-type {
    position: relative;
    left: -60px;
    top: -50px;
}

.dice-type .dice-box:nth-child(2) {
    left: 40px;
}

.dice-type .dice-box:nth-child(3) {
    left: 80px;
}

.dice-box {
    padding: 13px 0 13px 0;
    display: flex;
    margin: 24px;
    height: 150px;
    width: 150px;
    border: 1px solid #777;
    border-radius: 30px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-image: linear-gradient(#f8f5f1, #dcd5cb);
    /* text-align: center;
    line-height: 150px;
    font-size: 100px; */
}

.dice-box .row {
    display: flex;
    /* margin: 10px; */
    align-items: cnter;
    width: 120px;
    height: 32px;
    /* border: 1px solid lightblue; */
}

.dice-box .row .dot {
    width: 30px;
    height: 30px;
    border-radius: 15px;
    border: 1px solid #666;
    background-image: linear-gradient(#333, #999);
}

.red-dot {
    position: relative;
    top: -7px;
    width: 46px;
    height: 46px;
    border-radius: 23px;
    border: 1px solid #b61616;
    background-image: linear-gradient(#b61616, #cf4444);
}

.left {
    justify-content: flex-start;
}

.right {
    justify-content: flex-end;
}

.between {
    justify-content: space-between;
}

.center {
    justify-content: center;
}

.modal-body .dice-box {
    position: absolute;
    transform: scale(0.2, 0.2);
    margin: 0;
}
</style>
