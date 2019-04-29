import * as React from "react"
import * as System from "../../design-system"
import { ControlType, PropertyControls } from "framer"

type Props = System.InputProps & {
  width: number
  height: number
  onValueChange: (value: string) => void
}

type State = {
  value: string
  valueFromProps: string
}

export class Input extends React.Component<Props, State> {
  state = {
    value: Input.defaultProps.value,
    valueFromProps: Input.defaultProps.value
  };

  // Allow setting the Value from within the property panel.
  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.value !== state.valueFromProps) {
      return { value: props.value, valueFromProps: props.value };
    }
  }

  handleChange = (event: React.ChangeEvent) => {
    const element = event.nativeEvent.target as HTMLInputElement

    const value = element.value;

    this.setState({ value });

    if (this.props.onValueChange) {
      this.props.onValueChange(value);
    }
  };

  render() {
    return (
      <System.Input
        {...this.props}
        value={this.state.value}
        onChange={this.handleChange}
      />
    )
  }

  static defaultProps: Props = {
    width: 150,
    height: 50,
    disabled: false,
    error: false,
    placeholder: "Email",
    value: "",
  }

  static propertyControls: PropertyControls<Props> = {
    value: { type: ControlType.String, title: "Value" },
    placeholder: { type: ControlType.String, title: "Placeholder" },
    disabled: { type: ControlType.Boolean, title: "Disabled" },
    error: { type: ControlType.Boolean, title: "Error" }
  }
}
