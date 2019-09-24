import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Table, Icon } from "antd";

const { Column } = Table;

const data = [
  {
    key: "1",
    age: 32,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  }
];

const columns = [
  {
    title: "Age",
    dataIndex: "age",
    key: "age"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  }
];

class UpdateDataSource extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: data,
      columns
    };
  }

  addColumn = () => {
    columns.push({
      key: columns.length + 1,
      dataIndex: "tian",
      title: columns.length + "新增"
    });

    this.setState({
      columns
    });
  };

  delColumn = () => {
    columns.pop();
    this.setState({
      columns
    });
  };

  render() {
    const { dataSource, columns } = this.state;
    return (
      <React.Fragment>
        <Table dataSource={dataSource} bordered>
          {columns.map(item => {
            return (
              <Column
                title={item.title}
                dataIndex={item.dataIndex}
                key={item.key}
              />
            );
          })}
          <Column
            title="操作"
            key="action"
            filterIcon={filtered => (
              <Icon type="search" style={{ color: "#f00" }} />
            )}
            filterDropdown={
              <div style={{ padding: 8 }}>
                <p onClick={this.addColumn}>新增一列</p>
                <p onClick={this.delColumn}>删除一列</p>
              </div>
            }
            // onFilterDropdownVisibleChange={
            //   visible => {
            //     if (visible) {
            //       setTimeout(() => this.searchInput.select());
            //     }
            //   }
            // }
            // render={(text, record) => <span>Invite {record.lastName}</span>}
          />
        </Table>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<UpdateDataSource />, document.getElementById("root"));
