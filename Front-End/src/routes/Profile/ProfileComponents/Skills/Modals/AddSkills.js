import React, { Component } from "react";
import { Modal } from "react-bootstrap";
// import '../Experience.css';

class AddSkills extends Component {
  state = {
    skill: "",
    list: this.props.prevSkills,
  };

  handleChange = (e) => {
    this.setState({ skill: e.target.value });
    // console.log(this.state.skill);
  };

  skillsSubmit = (e) => {
    e.preventDefault();
    this.props.submitSkills(this.state.list);
  };

  addSkill = (e) => {
    // alert('ADDED SKILL');
    e.preventDefault();
    let arr = this.state.list;
    arr.push(this.state.skill);
    this.setState({
      skill: "",
      list: arr,
    });
    // console.log(this.state.list);
  }

  deleteSkill = (id) => {
    let arr = this.state.list;
    arr.splice(id,1);
    this.setState({list : arr});
  }

  render() {
    let skillsData = null;
    if(this.state.list.length === 0){
      skillsData = (
        <h6 style={{margin:'auto',color:'grey'}} >You've not added any skills.</h6>
      )
    }
    if (this.state.list.length !== 0) {
      skillsData = this.state.list.map((skill,index)=>{
        return(
          <div>
            {skill}
            <i onClick={()=>this.deleteSkill(index)} class="deleteSkill fas fa-times"></i>
          </div>
        )
      })
    }

    return (
      <>
        <Modal
          show={true}
          animation={false}
          // centered
          onHide={this.props.hideModal}
        >
          <div className="userAddAbout">
            <h5>Add Skills!</h5>
            <i onClick={this.props.hideModal} class="fas fa-times"></i>

            {/* <form onSubmit={this.skillsSubmit}> */}

            <form onSubmit={this.addSkill}>
              <div className="form-group">
                <div>
                  <label>Enter the skill you want to add :</label>
                  <br></br>
                  <input
                    type="text"
                    value={this.state.skill}
                    autoComplete="off"
                    style={{
                      width: "100%",
                      padding: "4px 12px",
                      fontSize: "14px",
                    }}
                    name="lastName"
                    placeholder="What are you good at?"
                    onChange={this.handleChange}
                    required
                  />
                </div>
              </div>
            </form>

            <div className="displaySkillsArea">{skillsData}</div>

            <div className="modalBottom">
              <h6 className="userCloseButton" onClick={this.props.hideModal}>
                Close
              </h6>
              <button onClick={this.skillsSubmit} className="userSaveButton">
                Save
              </button>
            </div>
            {/* </form> */}
          </div>
        </Modal>
      </>
    );
  }
}

export default AddSkills;
