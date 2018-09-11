import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Register from './RegisterButton.jsx';
import WalletButton from './WalletButton.jsx';
import LoginAndWallet from './LoginAndWalletButton.jsx' 
import ContentPage from './ContentPage.jsx'
import LoginButton from './LoginButton.jsx'
import LoginPage from './LoginPage.jsx'


const styles = theme => ({
  '@global': {
    body: {
      color:'#000000',
    },
  },
  appBar: {
    position: 'fixed',
    boxShadow: "none",
    backgroundColor:'transparent',
  },
  toolbarTitle: {
    flex: 1,
    color:'#ffffff',
  },
  layout: { 
    paddingTop: theme.spacing.unit * 10,
    backgroundImage: `url('https://i.loli.net/2018/09/11/5b97e56249fe8.jpg')`,
    backgroundAttachment: 'fixed',
    backgroundSize: '100% 100%',
    paddingBottom: theme.spacing.unit * 40,
  },
  layout2: {
    //高校组成以及蓝图
    // backgroundColor:'#05122b', //紫黑色
    backgroundColor:'#1d213c', //紫黑色
    // backgroundImage: `url('https://i.loli.net/2018/08/25/5b810c2dc3225.jpeg')`, 
    paddingTop: theme.spacing.unit * 7,
    paddingBottom: theme.spacing.unit * 7,
  },
  layout3: {
    //价值主张
    backgroundColor:'#272b47', //更浅的紫黑色
    paddingTop: theme.spacing.unit * 7 ,
    paddingBottom: theme.spacing.unit * 7 ,
  },
  layout4: {
    backgroundColor:'#16192f', //更深的紫黑色
    paddingTop: theme.spacing.unit * 7,
    paddingBottom: theme.spacing.unit * 25,
  },
  layout5: {
    backgroundColor:'#272b47', 
    color:"#0b91a5"
  },
  heroContent: {
    maxWidth: 1000,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  mainContent: {
    marginTop:theme.spacing.unit * 8,
    marginBottom:theme.spacing.unit * -8,
  },
  heroContent2: {
    maxWidth: 1200,
    paddingLeft: theme.spacing.unit * 12,
  },
  heroContent3: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
    paddingLeft: theme.spacing.unit * 12,
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
  button:{
    size: 'large',
  },
  navbutton:{
    color: theme.palette.common.white,
  },
  subtitle:{
   color:'primary'
  },
  hr:{
    color:'#234008',
  },
  uequ:{
    marginTop:theme.spacing.unit * 5,
    color:"#1d64d6",
  },
  ziti:{
    color:"#1d64d6",
  },
  Divider:{
    color:'#272b47'
  }
});

class MainPage extends React.Component {

  handleScroll = () => {
    scroll({top:700,behavior:"smooth"});
  }

  render () {
    const { classes } = this.props;
    
    return (
      <React.Fragment>
      <CssBaseline /> 
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title"  noWrap className={classes.toolbarTitle}>
                ///
          </Typography>
          {/* <Button className={classes.navbutton}>社区介绍</Button> */}
          <Button className={classes.navbutton} color="secondary" href="https://github.com/WildSaoFeng/StarrySky/wiki/SSC-002-%E7%B9%81%E6%98%9F%E7%A0%94%E5%8F%91%E7%AB%A0%E7%A8%8B-Constitution-of-Starry-Sky's-R&D">繁星章程</Button>
          {/* <Button className={classes.navbutton} href="https://github.com/FUTingFei/gitTest/blob/master/%E9%AB%98%E6%A0%A1%E5%8C%BA%E5%9D%97%E9%93%BE%E6%8A%80%E6%9C%AF%E7%A4%BE%E5%8C%BA%E7%99%BD%E7%9A%AE%E4%B9%A6.pdf">白皮书</Button> */}
          {/* <Login></Login> */}
          {/* 功能区 */}
          <LoginAndWallet></LoginAndWallet>
          {/* 功能区 */}
        </Toolbar>
      </AppBar>

      

      {/* 首页信息开始 */}  
      <main className={classes.layout}>
        <div className={classes.heroContent}>
          <div className={classes.mainContent}>
          <Grid container spacing={40} >
            <Grid item xs={6} >
              <Typography variant="title" align="left" color="inherit" style={{color:'#ffffff',fontSize:29}} component="p">
                中央财经大学“繁星”区块链研究协会
              </Typography>
              <br/><br/><br/>
              <Typography variant="title" align="left" color="inherit" style={{color:'#eaeff7',fontSize:20}} component="p">
                本协会是中央财经大学学生自愿组织的学生社团,
                社团宗旨是：帮助对于区块链有兴趣的同学高效学习区块链的内涵，了解学科热点以及区块链技术实现方法，开阔科研视野，增进学术交流和增强实践能力
              </Typography>
            </Grid>
           
            <Grid item xs={6} >
              {/* <LoginPage></LoginPage> */}
            </Grid>
          </Grid>
           
          </div>
        </div>
      </main>
      {/* 首页信息结束 */}
      {/* 内容页 */}
      <ContentPage></ContentPage>
      {/* 内容页 */}
    </React.Fragment>
    )
  }


}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainPage);
