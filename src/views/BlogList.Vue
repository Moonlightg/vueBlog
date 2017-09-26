<template>
  <div class="blog-list-container">
    <div class="table-header">
      <span>名称</span>
      <span>创建时间</span>
    </div>
    <ul v-if="issues && issues.length > 0" class="issue-list" ref="issueList">
      <li class="issue-item" v-for="issue in issues" :key="issue.id">
        <router-link tag="a" :to="{name: 'BlogDetail', params: {number: issue.number, issue: issue}}">
          {{issue.title}}
        </router-link>
        <ul>
          <li class="tag tag-small" v-for="label in issue.labels" :key="label.id" @click="setActiveLabel(label)"
              :style="{ backgroundColor: '#' + label.color}">{{label.name}}
          </li>
        </ul>
        <span class="time">
          {{$moment(issue.created_at).format('YYYY-MM-DD HH:mm')}}
        </span>
      </li>
    </ul>
    <div v-else class="no-data">
      <div></div>
      <span>该分类下还没有文章哦</span>
    </div>
    <div class="bottom-bar">
      <input type="text" class="fl query" v-model="keyword" placeholder="按文章标题或内容搜索..."
             @keyup.enter="searchIssues()"/>
      <pagination :totalNum="totalNum" :currentPage="currentPage" :pageSize="pageSize"
                  @currentPageChanged="handleCurrentPageChanged"/>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  $time-width: 150px;
  .no-data {
    flex-grow: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    div {
      flex: 1 0 160px;
      background: url("../assets/no-data.png") no-repeat bottom;
    }
    span {
      flex-grow: 1;
      text-align: center;
      padding: 30px;
      color: #666666;
      font-size: 14px;
    }
  }
</style>
<script>
  import { mapGetters, mapActions } from 'vuex'
  import Pagination from '../components/Pagination.vue'

  export default {
    data () {
      return {
        keyword: '',
        totalNum: 0,
        currentPage: 1,
        issues: []
      }
    },
    components: {Pagination},
    watch: {
      activeLabel (label) {
        this.keyword = ''
        this.totalNum = 0
        this.currentPage = 1
        this.getIssues()
      }
    },
    computed: {
      ...mapGetters([
        'activeLabel',
        'pageSize'
      ])
    },
    methods: {
      ...mapActions([
        'updateActiveLabel'
      ]),
      setActiveLabel (label) {
        this.updateActiveLabel(label)
      },
      searchIssues () {
        this.currentPage = 1
        this.getIssues()
      },
      handleCurrentPageChanged (val) {
        this.currentPage = val
        this.getIssues()
      },
      getIssues () {
        this.$gitHubApi.getIssues(this, {
          label: this.activeLabel ? this.activeLabel.name : '',
          keyword: this.keyword,
          currentPage: this.currentPage,
          pageSize: this.pageSize
        }).then(response => {
          // 加载完数据后滚动到顶部
          if (this.$refs.issueList) {
            this.$refs.issueList.scrollTop = 0
          }
          this.totalNum = response.data.total_count
          this.issues = response.data.items
        })
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.getIssues()
      })
    }
  }
</script>
