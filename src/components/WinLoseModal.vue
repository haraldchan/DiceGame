<template>
    <div>
        <div class="modal bg-dark" :class="{ active: modalActive }">
            <h1>
                {{ turnResult.player !== "" ? turnResult.player : "" }}
                {{ winLose }}
            </h1>
            <div class="result">
                <div class="detame" v-show="winLose !== ''">
                    <DiceBox class="db" ref="dicebox1"></DiceBox>
                    <DiceBox class="db" ref="dicebox2"></DiceBox>
                    <DiceBox class="db" ref="dicebox3"></DiceBox>
                </div>
                <div
                    class="yaku"
                    :class="{ draw: turnResult.kachiMake === 'DRAW' }"
                >
                    {{
                        turnResult.kachiMake === "DRAW"
                            ? "引 き 分 け。"
                            : turnResult.displayData[0]["hantei"]
                    }}
                </div>
            </div>
            <p class="phrase">{{ phrase }}</p>
            <span class="nokori sans-serif">
                点数:
                {{
                    turnResult.kachiMake === "DRAW"
                        ? "変動なし"
                        : turnResult.displayData[0]["points"]
                }}
            </span>
            <span
                v-show="pointChange !== 0"
                class="change sans-serif"
                :class="plusMinusColor ? 'plus' : 'minus'"
            >
                {{
                    pointChange === null
                        ? ""
                        : pointChange < 0
                        ? " " + pointChange
                        : " +" + pointChange
                }}
            </span>
            <b-button class="dismiss" @click="toggleModal">了 解</b-button>
        </div>
    </div>
</template>

<script>
import DiceBox from "./DiceBox.vue";

export default {
    name: "WinLoseModal",
    components: {
        DiceBox,
    },
    props: ["isActiveWinLose", "toggle", "turnResult"],
    data() {
        return {};
    },
    methods: {
        getSmallDices() {
            this.$refs.dicebox1.dice =
                this.turnResult.displayData[0]["kekka"][0];
            this.$refs.dicebox2.dice =
                this.turnResult.displayData[0]["kekka"][1];
            this.$refs.dicebox3.dice =
                this.turnResult.displayData[0]["kekka"][2];
        },
        toggleModal() {
            this.$emit("toggle", "WinLose");
        },
    },
    computed: {
        winLose() {
            if (this.wlResult.kachiMake === "WIN") {
                return "の勝ち！！";
            } else if (this.wlResult.kachiMake === "LOSE") {
                return "の負け！！";
            } else return "";
        },
        phrase() {
            switch (this.wlResult.displayData[0]["hantei"]) {
                case "ピンゾロ！":
                    return "五倍もらった！！！！！";
                case "ゾロ目！！":
                    return "三倍もらった！！！";
                case "シゴロ！！":
                    return "二倍もらった！！";
                case "ヒフミ！！":
                    return "倍払い！！";
                default:
                    return null;
            }
        },
        pointChange() {
            const bet = this.wlResult.displayData[0]["bet"];
            if (
                this.wlResult.displayData[0]["hantei"] === "通常の目" &&
                this.wlResult.displayData[1]["hantei"] === "目なし"
            ) {
                return bet;
            } else {
                switch (this.wlResult.displayData[0]["hantei"]) {
                    case "ピンゾロ！":
                        return bet * 5;
                    case "ゾロ目！！":
                        return bet * 3;
                    case "シゴロ！！":
                        return bet * 2;
                    case "ヒフミ！！":
                        return bet * -2;
                    default:
                        return 0;
                }
            }
        },
        plusMinusColor() {
            if (this.pointChange < 0) {
                return false;
            } else {
                return true;
            }
        },
        modalActive() {
            return this.isActiveWinLose;
        },
        wlResult() {
            return this.turnResult;
        },
    },
    watch: {
        modalActive(val) {
            val === true ? this.getSmallDices() : null;
        },
        pointChange(val) {
            if (this.turnResult.kachiMake !== "DRAW") {
                if (this.wlResult.player === "Player 1") {
                    this.$store.commit("updatePointP1", val);
                } else {
                    this.$store.commit("updatePointP2", val);
                }
            }
        },
    },
};
</script>

<style scoped>
/* === result modal ===  */
* {
    font-family: "Toppan Bunkyu Midashi Mincho";
}

.sans-serif {
    font-family: sans-serif;
}

.modal {
    display: none;
    position: absolute;
    padding: 30px;
    left: 50%;
    margin-left: -330px;
    top: 25vh;
    width: 680px;
    height: 400px;
    /* background-color: #2d2d2d; */
    border-radius: 20px;
    border: 1px solid lightblue;
    transition: display 0.3s linear;
}

.modal h1 {
    margin: 0 0 30px;
}

.result {
    display: flex;
    justify-content: space-between;
    width: 600px;
    height: 100px;
}

.detame {
    display: flex;
    position: relative;
    width: 355px;
    height: 100px;
    /* border:1px solid lightblue; */
    border-right: 1px solid #d3d3d3;
    align-items: center;
}

.detame .db:nth-child(2) {
    top: 0px;
    position: absolute;
    left: 100px;
}

.detame .db:nth-child(3) {
    top: 0px;
    position: absolute;
    left: 200px;
}

.yaku {
    /* width: 250px; */
    flex: 1;
    height: 100px;
    margin-left: 20px;
    font-size: 45px;
    line-height: 100px;
    text-align: center;
}

.phrase {
    margin: 30px 0 20px 30px;
    font-size: 30px;
}

.change {
    font-size: 25px;
}

.nokori {
    margin-left: 40px;
    font-size: 20px;
}

.dismiss {
    width: 100px;
    height: 40px;
    line-height: 30px;
    position: relative;
    left: 250px;
    margin-left: -50px;
    font-size: 20px;
    border-radius: 10px;
    border: #333 1px solid;
}

.plus {
    color: #01a001;
}

.minus {
    color: red;
}

.active {
    display: block;
}

.draw {
    margin: 30px 0 30px;
    font-size: 60px;
}
</style>
