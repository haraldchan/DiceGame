<template>
    <div>
        <div class="modal bg-dark" :class="{ active: modalActive }">
            <h1>{{ draw === null ? turnResult.player + "の勝ち" : draw }}</h1>
            <div class="vs">
                <!-- result of PlayerOne -->
                <div class="result">
                    <div class="detame" style="margin-left: 10px">
                        <DiceBox class="db" ref="dicebox1_1"></DiceBox>
                        <DiceBox class="db" ref="dicebox1_2"></DiceBox>
                        <DiceBox class="db" ref="dicebox1_3"></DiceBox>
                    </div>
                    <div class="detame yaku">
                        <DiceBox class="db vs-dice" ref="dicebox1_4"></DiceBox>
                        <div>の 目</div>
                    </div>
                </div>
                <!-- result of PlayerTwo -->
                <div class="result">
                    <div class="detame" style="margin-left: 10px">
                        <DiceBox class="db" ref="dicebox2_1"></DiceBox>
                        <DiceBox class="db" ref="dicebox2_2"></DiceBox>
                        <DiceBox class="db" ref="dicebox2_3"></DiceBox>
                    </div>
                    <div class="detame yaku">
                        <DiceBox class="db vs-dice" ref="dicebox2_4"></DiceBox>
                        <div>の 目</div>
                    </div>
                </div>
            </div>
            <p class="phrase">{{ phrase }}</p>
            <span class="nokori sans-serif">
                点数:
                {{
                    turnResult.kachiMake === "DRAW"
                        ? "変動なし"
                        : turnResult.displayData[0]["points"]
                }}</span
            >

            <span class="change sans-serif plus" style="font-size: 25px">
                {{ " +" + pointChange }}
            </span>
            <b-button class="dismiss" @click="toggleModal">了 解</b-button>
        </div>
    </div>
</template>

<script>
import DiceBox from "./DiceBox.vue";

export default {
    name: "VersusModal",
    components: {
        DiceBox,
    },
    props: ["isActiveVersus", "toggleVersus", "turnResult"],
    data() {
        return {
            result: [],
            phrase: "賭けた分もらった。",
        };
    },
    methods: {
        getSmallDices() {
            if (this.tsujo.every((item) => item === "通常の目")) {
                this.$refs.dicebox1_1.dice =
                    this.turnResult.displayData[0]["kekka"][0];
                this.$refs.dicebox1_2.dice =
                    this.turnResult.displayData[0]["kekka"][1];
                this.$refs.dicebox1_3.dice =
                    this.turnResult.displayData[0]["kekka"][2];
                this.$refs.dicebox1_4.dice =
                    this.turnResult.displayData[0]["shoubu"];
                this.$refs.dicebox2_1.dice =
                    this.turnResult.displayData[1]["kekka"][0];
                this.$refs.dicebox2_2.dice =
                    this.turnResult.displayData[1]["kekka"][1];
                this.$refs.dicebox2_3.dice =
                    this.turnResult.displayData[1]["kekka"][2];
                this.$refs.dicebox2_4.dice =
                    this.turnResult.displayData[1]["shoubu"];
            } else return;
        },
        toggleModal() {
            this.$emit("toggle", "Versus");
        },
    },
    computed: {
        tsujo() {
            if (this.turnResult.displayData.length < 2) {
                return;
            } else {
                return [
                    this.turnResult.displayData[0]["hantei"],
                    this.turnResult.displayData[1]["hantei"],
                ];
            }
        },
        draw() {
            if (this.turnResult.displayData.length < 2) {
                return;
            } else {
                if (
                    this.turnResult.displayData[0]["shoubu"] ===
                    this.turnResult.displayData[1]["shoubu"]
                ) {
                    return "引き分け。";
                } else return null;
            }
        },
        modalActive() {
            return this.isActiveVersus;
        },
        pointChange() {
            return this.turnResult.displayData[0]["bet"];
        },
    },
    watch: {
        modalActive(val) {
            val === true ? this.getSmallDices() : null;
        },
        pointChange(val) {
            if (
                this.turnResult.displayData[0]["hantei"] === "通常の目" &&
                this.turnResult.displayData[1]["hantei"] === "通常の目"
            ) {
                if (this.turnResult.player === "Player 1") {
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
    font-weight: bolder;
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
    height: 480px;
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
    align-items: center;
}

/*
.detame .dice-box {
    position: absolute;
    transform: scale(0.5, 0.5);
    margin: 0;
}
*/
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
    margin-right: 20px;
    padding-left: 20px;
    font-size: 40px;
    line-height: 100px;
    text-align: right;
    border-left: 1px solid #d3d3d3;
    justify-content: space-between;
}

.vs-dice {
    position: relative;
    top: -50px;
    left: -20px;
}

.phrase {
    margin: 30px 0 20px 30px;
    font-size: 30px;
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
    left: 58%;
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