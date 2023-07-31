<template>
    <div>
        <div class="final-result bg-dark" :class="{ active: modalActive }">
            <h1 style="font-size: 50px; text-align: center; margin: 10px">
                通 &nbsp; &nbsp; 算
            </h1>
            <div class="players">
                <div>P1</div>
                <div>P2</div>
            </div>
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
                    <div class="count">{{ playerOneFinal['ピンゾロ！'] }} 回</div>
                    <div class="count">{{ playerTwoFinal['ピンゾロ！'] }} 回</div>
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
                    <div class="count">{{ playerOneFinal['ゾロ目！！'] }} 回</div>
                    <div class="count">{{ playerTwoFinal['ゾロ目！！'] }} 回</div>
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
                    <div class="count">{{ playerOneFinal['シゴロ！！'] }} 回</div>
                    <div class="count">{{ playerTwoFinal['シゴロ！！'] }} 回</div>
                </li>
                <!-- 通常の目 -->
                <li>
                    <div class="title">通常の目</div>
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
                    <div class="count">{{ playerOneFinal['通常の目'] }} 回</div>
                    <div class="count">{{ playerTwoFinal['通常の目'] }} 回</div>
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
                    <div class="count">{{ playerOneFinal['ヒフミ！！'] }} 回</div>
                    <div class="count">{{ playerTwoFinal['ヒフミ！！'] }} 回</div>
                </li>
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
                    <div class="count">{{ playerOneFinal['目なし'] }} 回</div>
                    <div class="count">{{ playerTwoFinal['目なし'] }} 回</div>
                </li>
            </ul>
            <b-button class="dismiss" @click="toggleModal"> 了 解 </b-button>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "FinalResult",
    props: ["isActiveFinal", "toggle"],
    data() {
        return {
            dismiss: false,
        };
    },
    methods: {
        toggleModal() {
            this.$emit("toggle", "Final");
        },
    },
    computed: {
        ...mapState(["playerOneFinal", "playerTwoFinal"]),
        modalActive() {
            return this.isActiveFinal;
        },
    },
};
</script>

<style scoped>
* {
    font-family: "Toppan Bunkyu Midashi Mincho";
    font-weight: bolder;
}

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

/* === 通算 === */
.players{
    display: flex;
    justify-content: flex-end;
    font-size: 25px;
    border-bottom: #999 1px solid;
}

.players div{
    margin-right:45px
}

.final-result {
    display: none;
    position: absolute;
    padding: 30px 30px 30px 0;
    top: 10vh;
    width: 600px;
    height: 680px;
    /* background-color: #fff; */
    border-radius: 20px;
    border: 1px solid lightblue;
    z-index: 9999;
}
.final-result ul {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 400px;
    width: 500px;
    border-bottom: #999 1px solid;
}
.final-result li {
    display: flex;
    margin: 15px;
    height: 20px;
    justify-content: space-between;
    font-size: 25px;
}

.final-result li .title {
    width: 100px;
    margin-right: 20px;
}

.final-result li:last-child {
    margin-bottom: 38px;
}

.final-result li .dice-type:nth-child(2) {
    flex: 1;
    position: relative;
}

.final-result .dice-box {
    position: absolute;
    margin: 0;
    transform: scale(0.25, 0.25);
    left: -38px;
    top: -62px;
}

.final-result .dice-box:nth-child(2) {
    left: 10px;
}

.final-result .dice-box:last-child {
    left: 60px;
}

.count {
    margin-left: 35px;
}
.dismiss {
    position: relative;
    left: 240px;
    margin-top: 40px;
    margin-left: -10%;
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