import React from "react";
import { StyleSheet, View, ActivityIndicator,SafeAreaView } from "react-native";
import PeopleList from "../components/PeopleList";
import {fetchPropleApi} from '../redux/actions/peopleAction'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
 class PeopleProfile  extends React.Component {
 

  

  componentDidMount() {
    // this.fetchRandomPeopleAPI();
    this.props.fetchPropleApi();
  }

  render() {
    let content = <SafeAreaView><PeopleList people={this.props.peopleData.people} /></SafeAreaView>;
    if (this.props.peopleData.isFetching) {
      content = <ActivityIndicator size="large" />;
    }
    return <View style={styles.container}>{content}</View>;
  }
}

PeopleProfile.propTypes = {
    fetchPropleApi:PropTypes.func.isRequired,
    peopleData:PropTypes.object.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#093339"
  }
});
  
const mapStateToProps= state=>{
    return{
        peopleData:state
    }
}

export default connect(mapStateToProps,{fetchPropleApi}) (PeopleProfile);