<template>
    <div class="modal bg-dark" :class="{ active: modalActive }">
        <h1>勝 負 あ り！</h1>
        <div class="winner">
            <div style="font-size: 30px">勝者：{{ winner[0] }}</div>
            <div>
                点数：{{ winner[1] }} <span>(+{{ winner[1] - 15000 }})</span>
            </div>
        </div>
        <div class="btns">
            <b-button @click="reset" class="dismiss">再 開</b-button>
            <b-button @click="showFinalResult" class="dismiss"
                >通 算 結 果</b-button
            >
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "GameOver",
    props: ["isActiveGameOver",'resetModals'],
    methods: {
        reset() {
            this.$store.commit("gameReset");
            this.$emit("resetModals")
        },
        showFinalResult() {
            this.$emit("toggle", "Final");
        },
    },
    computed: {
        ...mapState(["playerOneStatus", "playerTwoStatus"]),
        winner() {
            if (this.playerOneStatus.points <= 0) {
                return ["Player Two", this.playerTwoStatus.points];
            } else return ["Player One", this.playerOneStatus.points];
        },
        modalActive() {
            return this.isActiveGameOver;
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

h1 {
    margin: 30px 0 30px;
    font-size: 60px;
    text-align: center;
}

.winner {
    margin-left: 50px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 120px;
    font-size: 20px;
}

.btns {
    margin: 0 auto;
    display: flex;
    width: 430px;
    justify-content: space-between;
}

.dismiss {
    width: 145px;
    height: 50px;
    line-height: 30px;
    position: relative;
    font-size: 25px;
    border-radius: 10px;
    border: #333 1px solid;
}

.active {
    display: block;
}
</style>