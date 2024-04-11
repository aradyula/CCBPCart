import {Component} from 'react'
import {
  Container,
  FormContainer,
  Heading,
  MHeading,
  Label,
  Generate,
  Input,
  MemeContainer,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    isClicked: false,
  }

  onChangeURL = e => {
    this.setState({imageUrl: e.target.value})
  }

  onChangeTop = e => {
    this.setState({topText: e.target.value})
  }

  onChangeBottom = e => {
    this.setState({bottomText: e.target.value})
  }

  onChangeFontSize = e => {
    this.setState({fontSize: e.target.value})
  }

  formSubmission = e => {
    //  const {isClicked} = this.state

    e.preventDefault()
    // console.log(imageUrl, topText, bottomText, fontSize)
    this.setState({isClicked: true})
    //  this.renderMemeContainer()
  }

  renderMemeContainer = () => {
    const {imageUrl, topText, bottomText, fontSize} = this.state
    return (
      <MemeContainer bgImg={imageUrl} font={fontSize} data-testid="meme">
        <MHeading font={fontSize}>{topText}</MHeading>
        <MHeading font={fontSize}>{bottomText}</MHeading>
      </MemeContainer>
    )
  }

  render() {
    const {imageUrl, topText, bottomText, fontSize, isClicked} = this.state
    return (
      <Container>
        <FormContainer onSubmit={this.formSubmission}>
          <Heading>Meme Generator</Heading>
          <Label htmlFor="url">Image URL</Label>
          <Input
            type="text"
            id="url"
            value={imageUrl}
            onChange={this.onChangeURL}
            placeholder="Enter the Image URL"
          />
          <Label htmlFor="top">Top Text</Label>
          <Input
            type="text"
            id="top"
            value={topText}
            onChange={this.onChangeTop}
            placeholder="Enter the Top Text"
          />
          <Label htmlFor="bottom">Bottom Text</Label>
          <Input
            type="text"
            id="bottom"
            value={bottomText}
            onChange={this.onChangeBottom}
            placeholder="Enter the Bottom Text"
          />
          <Label htmlFor="font">Font Size</Label>
          <Input
            as="select"
            id="font"
            value={fontSize}
            onChange={this.onChangeFontSize}
          >
            {fontSizesOptionsList.map(item => (
              <option key={item.optionId} value={item.optionId}>
                {item.displayText}
              </option>
            ))}
          </Input>
          <Generate type="submit">Generate</Generate>
        </FormContainer>
        {isClicked && this.renderMemeContainer()}
      </Container>
    )
  }
}
export default MemeGenerator
