import React from 'react';
import { connect } from 'react-redux';

import { fetchData } from '../actions';

const styles = {
  tableList: {
    border: '1px solid black'
  },
  tableTd: {
    border: '1px solid black',
    padding: 10
  }
}

class PasswordList extends React.Component {


  componentDidMount(){
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        <center>
        <table >
          <thead>
            <tr>
              <th style={styles.tableTd}>URL</th>
              <th style={styles.tableTd}>Username</th>
              <th style={styles.tableTd}>Password</th>
              <th style={styles.tableTd}>CreatedAt</th>
              <th style={styles.tableTd}>UpdatedAt</th>
            </tr>
          </thead>
          <tbody>
            {this.props.saveData.map( data => {
              return (
                <tr key={data.id}>
                  <td style={styles.tableTd}>{data.url}</td>
                  <td style={styles.tableTd}>{data.username}</td >
                  <td style={styles.tableTd}>{data.password}</td >
                  <td style={styles.tableTd}>{data.createdAt}</td >
                  <td style={styles.tableTd}>{data.updatedAt}</td>
                </tr>
              )
              }
            )}

          </tbody>
        </table>
        </center>
      </div>
    )
  }


}

const mapStateToProps = (state) => {
  // console.log('----jiojioj----',state.passwordData);
  return {
    saveData: state.passwordData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordList);
