import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Paper from 'material-ui/Paper';
import Toggle from 'material-ui/Toggle';

export default class Article extends React.Component {

  constructor(props) {
    super(props);
    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.handleReduce = this.handleReduce.bind(this);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange(expanded) {
    this.setState({ expanded: expanded });
  };

  handleToggle(event, toggle) {
    this.setState({ expanded: toggle });
  };

  handleExpand() {
    this.setState({ expanded: true });
  };

  handleReduce() {
    this.setState({ expanded: false });
  };

  render() {
    return (
        <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
          <CardTitle title="Card title" subtitle="Card subtitle" />
          <CardText expandable={true}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton label="Read More..." onTouchTap={this.handleExpand} />
          </CardActions>
        </Card>
    );
  }
}
