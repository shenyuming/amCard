<template>
    <div class="managerOrderWrap">
        <div v-if="tableData.length>0">
            <el-table :data="tableData" :cell-style="{padding:'0px'}" :row-style="{height:'55px'}" style="width:100%" class="bigTable" :header-cell-style="{background:'#0A0D2B',color:'#fff'}">
                <el-table-column prop="merchantName" label="Merchan tName"  width="160" />
                <el-table-column prop="merchantAddress" label="Merchant Address"  />
                <el-table-column prop="transactionAmount"  label="Transaction Amount"/>
                <el-table-column prop="Score" label="Merchant Address" />
                <el-table-column prop="createTime" label="CreateTime" />
                <el-table-column prop="transactionDate" label="CreateTime" />
                <el-table-column prop="status" label="Status" width="60"/>
            </el-table>
            <el-row class="page-common">
                <el-pagination 
                background="" 
                layout="prev, pager, next, sizes" 
                :total="totalOrder" 
                :page-size="pageSize"
                :page-sizes="[10,20,50,100]"  
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange" />
            </el-row>
        </div>
        <div class="no-data" v-else>
            <img src="@/assets/image/noStatus.png" alt="">
            <p>{{$t('lang.user.noData')}}</p>
        </div>
    </div>
</template>

<script>
import Utils from "@/utils/util"
export default {
    name: "managerOrder",
    props: {},
    data() {
        return {
            tableData: [{
              merchantName:'11'
            }],
            totalOrder: 0,
            pageSize: 10,
            PageIndex: 1
        }
    },
    methods: {
        //查询所有的会员信息
        queryData() {
            var _this = this
        },
       handleSizeChange(val) {
           this.pageSize = val
       },
        //改变页面
        handleCurrentChange(val) {
            this.PageIndex = val
        }
    },
    created() {
       this.queryData()
    }
}
</script>

<style lang='scss' scoped>
.managerOrderWrap {
    width: 90%;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 60px;
    color: #fff;
    .bigTable {
        .no-data {
            text-align: center;
            margin: 40px 0;
        }
    }
}
</style>