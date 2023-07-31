<template>
    <div>
        <div class="chips" :class="{ 'text-secondary': turnDisable }">
            <h1>{{ playerName }}</h1>
            <div class="pt">点数：{{ status.points }}</div>
            <b-form-spinbutton
                id="sb-step"
                v-model="status.bet"
                min="100"
                :max="status.points"
                step="100"
                size="lg"
                block
                :disabled="turnDisable"
            ></b-form-spinbutton>
            <b-button
                class="roll-btn"
                :variant="this.playerName === 'Player 1' ? 'primary' : 'danger'"
                block
                @click="rollCard"
                :disabled="turnDisable"
                >振 れ や！</b-button
            >
        </div>
    </div>
</template>

<script>
export default {
    name: "PlayerCard",
    data() {
        return {
            playerName: "Player 1",
            turnDisable: false,
            result: [],
        };
    },
    methods: {
        rollCard() {
            this.turnDisable = true;
            this.$emit("rollApp");
            setTimeout(() => {
                this.result = this.$store.state.rollResult;
                this.$store.commit("clearResult");
                let res = JSON.stringify({
                    player: this.playerName,
                    kekka: this.result,
                    hantei: this.hantei,
                    shoubu: this.shoubu,
                    points: this.status.points,
                    bet: this.status.bet,
                });
                this.$store.commit("pushResultPool", res);

                this.$store.commit("turnChange", this.otherPlayer);
            }, 3000);
        },
    },
    computed: {
        turn() {
            return this.$store.state.turn;
        },
        otherPlayer() {
            if (this.playerName === "Player 1") {
                return "Player 2";
            } else return "Player 1";
        },
        hantei() {
            function isDistinct(arr) {
                let s = new Set();
                for (let i = 0; i < arr.length; i++) {
                    s.add(arr[i]);
                }
                return s.size === arr.length;
            }
            if (this.result.length === 0) {
                return;
            } else if (this.result.every((item) => item === 1)) {
                return "ピンゾロ！";
            } else if (this.result.every((item) => item === this.result[0])) {
                return "ゾロ目！！";
            } else if (
                this.result.includes(4) &&
                this.result.includes(5) &&
                this.result.includes(6)
            ) {
                return "シゴロ！！";
            } else if (
                this.result.includes(1) &&
                this.result.includes(2) &&
                this.result.includes(3)
            ) {
                return "ヒフミ！！";
            } else if (isDistinct(this.result)) {
                return "目なし";
            } else {
                return "通常の目";
            }
        },
        shoubu() {
            if (this.hantei === "通常の目") {
                if (this.result[0] === this.result[1]) {
                    return this.result[2];
                } else if (this.result[0] === this.result[2]) {
                    return this.result[1];
                } else {
                    return this.result[0];
                }
            } else return 0;
        },
        status() {
            if (this.playerName === "Player 1") {
                return this.$store.state.playerOneStatus;
            } else return this.$store.state.playerTwoStatus;
        },
    },
    watch: {
        turn(val) {
            val === this.otherPlayer
                ? (this.turnDisable = true)
                : (this.turnDisable = false);
        },
    },
};
</script>

<style>
.chips {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px;
    width: 280px;
    height: 300px;
}

.pt {
    font-size: 28px;
    height: 60px;
    border-bottom: 1px solid gray;
}

.roll-btn {
    font-family: "Toppan Bunkyu Midashi Mincho";
    font-weight: bolder;
    font-size: 25px;
    border-radius: 10px;
    height: 50px;
}
</style>