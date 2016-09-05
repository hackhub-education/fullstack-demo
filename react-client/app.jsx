
var Student = React.createClass({

    render: function() {
        return <div>{this.props.student.firstName}</div>;
    }

});

var StudentList = React.createClass({
    getInitialState: function() {

        return {
            studentList: []
        }
    },

    componentDidMount: function() {

        var ReactThis = this;

        axios.get('http://localhost:3000/student')
            .then(function (response) {
                ReactThis.setState({
                    studentList: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    handleClick() {
      //TODO: make request to server and render to another compnent

    },



    render: function() {
        return (
            <div>
                {
                    this.state.studentList.map(function(student) {
                        return <Student onClick={this.handleClick} student={student} key={student._id} />
                    })
                }
            </div>
        );
    }
});

ReactDOM.render(
    <StudentList/>, document.getElementById('app')
);