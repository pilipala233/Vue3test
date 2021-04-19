<template >
    <div style="background-color: #f6f7f9;overflow: hidden;">

        <div class="body-wrap">
            <div >
                <span class="title">疫情防控报备证明</span>
            </div>
            <div>
                <span class="time">{{time}}</span>
            </div>
            <div>
                <span class="visit">本页面当日访问
                    <span class="visit-count">{{count}}</span>
                    次
                </span>                
            </div>

            <div class="pic">
                <van-image
                    width="110"
                    height="150"
                    :src="img[0]"
                />
                
                <van-image
                    width="160"
                    height="160"
                    :src="img[1]"
                    class="pass-img"
                    style="position: absolute;
                    right: 10vw;"
                />
            </div>
            <form class="form-wrap">
                
                <div v-for="(item,i) in info" :key="i" class="form-item">
                    <template v-if ="i==5">
                        <span style="display: flex;flex-direction: column;">{{item.name}}:
                            <span>{{item.value}}</span>
                        </span>
                    </template>
                    <template v-else>
                        <span>{{item.name}}:{{item.value}}</span>
                    </template>
                    
                </div>
            
            </form>
            <div class="btn-wrap">
                <van-button type="primary" @click="edit">再次服务</van-button>
                <van-button type="warning" @click="Refresh">刷新</van-button>
                <van-button  color="#03c05e">返回</van-button>                
            </div>
           

            

        </div>  
        <van-dialog v-model:show="show" title="修改信息" show-cancel-button @confirm="confirm">
            <div class="upload-title">
                 修改头像：
            </div>
           
            <van-uploader :after-read="afterRead" v-model="fileList" max-count="1"/>
            
            <van-form style="height:100%">

                <van-field
                    v-model.number="changedata.changecount"
                    name="访问次数"
                    label="访问次数"
                    placeholder="访问次数"
                    
                />
                
                <van-field
                    v-model="changedata.changetime"
                    name="出入时间"
                    label="出入时间"
                    placeholder="出入时间"
                />
                
            </van-form>
            
        </van-dialog>
        
    </div>

   
</template>
<script>
import { defineComponent, reactive, toRefs,onMounted, ref ,watch} from 'vue'
import { Button,Image ,Dialog,Form,Field,Uploader} from 'vant';

import helper from '../util/help'
export default defineComponent({
    setup() {
        
        let img=ref([require('@/assets/my1.png'),require('@/assets/pass.png')])
        let fileList =ref([])
        let count = ref(14329)
        let base64=ref('')
        watch(count,(newnum) => {
            if(newnum>=99999){
                count.value=14329
            }else{
                change.changedata.changecount=newnum
            }
        });


        let show = ref(false)
        let time =  ref(helper.formatDate(new Date(),'yyyy/MM/dd HH:mm:ss '))
        let data = reactive({
            info:[
                {name:'姓名',value:'XXX'},
                {name:'学号',value:'XXXXXXX'},
                {name:'学院',value:'XXXXXXXXXXXX'},
                {name:'班级',value:'XXXXXXX'},
                {name:'出入事由',value:'因私'},
                {name:'出入时间',value:`2021年${helper.formatDate(new Date(),'MM月dd')}日 08:43至2021年${helper.formatDate(new Date(),'MM月dd')}日 22:43`},
                {name:'审批部门',value:'XXXXXXXXXXXX'},
            ],

        })

        let change = reactive({
            changedata:{
                changecount:count.value,
                changetime:data.info[5].value
            }
        })

        const Refresh  = ()=>{
            count.value+=123
        }
        const edit  = ()=>{
            
            show.value=true
            //Dialog({ message: '提示' });
        }
        const confirm = ()=>{
            count.value=change.changedata.changecount
            data.info[5].value = change.changedata.changetime
            if(base64.value!=''){
                img.value[0]=base64.value
            }
            
            
        }
        const afterRead = (file)=> {
            // 此时可以自行将文件上传至服务器
            
            // 生成一个文件读取的对象
            const reader = new FileReader();
            reader.onload = function (ev) {
                // base64码
                base64.value= ev.target.result;

            }
            //发起异步读取文件请求，读取结果为data:url的字符串形式，
            reader.readAsDataURL(file.file);
        }
		onMounted(()=>{
           
            setInterval(() => {
                time.value = helper.formatDate(new Date(),'yyyy/MM/dd HH:mm:ss ')
                
            }, 1000);
		})
        return {
            ...toRefs(data),
            ...toRefs(change),
            img,
            time,
            show,
            count,
            fileList,
            Refresh,
            edit,
            confirm,
            afterRead
            
        }
    },
    components: {
        'van-button':Button,
        'van-image':Image,
        [Dialog.Component.name]: Dialog.Component,
        [Form.name]: Form,
        [Field.name]: Field,
        [Uploader.name]: Uploader
        
        
        

    },
})
</script>
<style scoped>


.body-wrap{
    height: calc(100% - 20px);
    box-sizing: border-box;
    margin:10px;
    padding: 20px;
    border-radius: 5px;
    background-color: #fff;

    box-shadow: 0 10px 36px 4px rgba(160, 160, 160, 0.2);
    
}
.body-wrap > div:nth-child(1){
    margin-bottom: 10px;
}
.body-wrap > div:nth-child(2){
    margin-bottom: 10px;
}
.body-wrap > div:nth-child(3){
    margin-bottom: 10px;
}
.title{
    font: bold;
    font-size: 25px;
    font-weight: 600;
    
}
@keyframes scaleDraw {  /*定义关键帧、scaleDrew是需要绑定到选择器的关键帧名称*/
        0%{
            transform: scale(1);  /*开始为原始大小*/
        }
        25%{
            transform: scale(1.3); /*放大1.1倍*/
        }
        50%{
            transform: scale(1);
        }
        75%{
            transform: scale(1.3);
        }
    }

.pass-img{
    animation-name: scaleDraw; /*关键帧名称*/
    animation-timing-function: ease-in-out; /*动画的速度曲线*/
    animation-iteration-count: infinite;  /*动画播放的次数*/
    animation-duration: 1s; /*动画所花费的时间*/
    transform-origin: right top;

}
.time{
    color: #de0305;
    font-size: 30px;
}
.visit{
    font-size: 20px;
    color: #000085;
}
.visit-count{
    font-size: 50px;
    
    /* font-weight: bold; */
}
.pic{
    display: flex;
    justify-content: center;
}
.form-wrap{
    margin: 10px 0;
    font-weight: 600;
    padding-left: 20px;
}
.form-item{
    font-size: 16px;
    text-align: left;
    line-height: 1.6;
    
}
.btn-wrap{
    display: flex;
    justify-content: center;
    
}
.btn-wrap>button{
    margin: 0 5px;
}
.upload-title{
    padding: 0px 16px;
    color: #646566;
    text-align: left;
    font-size: 14px;
}
</style>
