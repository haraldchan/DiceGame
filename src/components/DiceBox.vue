<template>
    <div>
        <div class="dice-box">
            <div class="row" :class="[dice < 4 ? 'right' : 'between']">
                <div v-show="dice > 3" class="dot"></div>
                <div v-show="dice > 1" class="dot"></div>
            </div>
            <div class="row" :class="[dice < 6 ? 'center' : 'between']">
                <div v-show="dice === 6" class="dot"></div>
                <div
                    v-show="dice === 1 || dice === 3 || dice === 5"
                    :class="[dice === 1 ? 'red-dot' : 'dot']"
                ></div>
                <div v-show="dice === 6" class="dot"></div>
            </div>
            <div class="row" :class="[dice < 4 ? 'left' : 'between']">
                <div v-show="dice > 1" class="dot"></div>
                <div v-show="dice > 3" class="dot"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "DiceBox",
    data() {
        return {
            dice: this.getRandom(1, 6),
        };
    },
    methods: {
        roll(rollTime) {
            // rolling is for display only
            const rolling = setInterval(() => {
                this.dice = this.getRandom(1, 6);
            }, 50);
            setTimeout(() => {
                clearInterval(rolling);
                // this is the real random dice for result
                let randomDice = this.getRandom(1, 6);
                this.dice = randomDice;
                this.$store.commit("getResult", randomDice);
            }, rollTime);
        },
        getRandom(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
    },
};
</script>

<style scoped>
/* === dice boxes === */
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

.detame .dice-box {
    position: absolute;
    transform: scale(0.5, 0.5);
    margin: 0;
    top: -23px;
    /* margin: 10px; */
}
</style>