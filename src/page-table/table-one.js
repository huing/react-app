import React, {Component} from 'react'
import {observer, inject} from 'mobx-react'
import {toJS} from 'mobx'

@inject('Table')
@observer 
class TableTwo extends Component {
  render() {
    const {     
      Table: {col, data},
      className,
    } = this.props
    return (
      <div className={`demo-table table-box ${className}`}>
        <table className="table">
          <thead className="thead">
            <tr>
              {
                toJS(col || []).map(item => 
                  <th key={item.dataIndex} data-index={item.dataIndex}>{item.title}</th>
                )
              }
            </tr>
          </thead>
          <tbody className="tbody">
            {
              toJS(data || []).map((data, i) => {
                return (
                  <tr key={data.id}>
                    {
                      toJS(col || []).map(item => {
                        return <td key={item.title} data-index={item.title}>{data[item.title.toLowerCase()]}</td>
                      }
                        
                      )
                    }
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
export default TableTwo