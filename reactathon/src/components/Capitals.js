import React from 'react'
import axios from 'axios'

class Capitals extends React.Component {
  state = {
    rightAnswerCapital1: '',
    rightAnswerCountry1: '',
    allAnswers: []
  }

  async componentDidMount() {
    try {
      const response = await axios.get('https://restcountries.eu/rest/v2/all')
      const hasCapitals = response.data.filter( (element) => element.capital.length > 0)
      const rightAnswer = hasCapitals[Math.floor(Math.random() * hasCapitals.length)]
      const rightAnswerCapital = rightAnswer.capital
      const rightAnswerCountry = rightAnswer.name
      const answerArray = [rightAnswer.capital]
      while (answerArray.length < 4) {
        const genWrongAnswer = hasCapitals[Math.floor(Math.random() * hasCapitals.length)].capital
        if (!answerArray.includes(genWrongAnswer)) {
          answerArray.push(genWrongAnswer)
        }
      }
      answerArray.sort()
      this.setState({ rightAnswerCapital1: rightAnswerCapital, 
        rightAnswerCountry1: rightAnswerCountry,
        allAnswers: answerArray }, () => {
        // console.log('country, capital', this.state.hasCapitals[0].name, this.state.hasCapitals[0].capital)
        
        console.log('answers', this.state.allAnswers)
        // this.setState({ 
        //   console.log
        //   // console.log('country, capital', this.state.randomCountry.name, this.state.randomCountry.capital)
        // }) 
      })
    } catch (err) {
      console.log(err)
    }
  }

  // async componentDidMount() {
  //   try {
  //     const response = await axios.get('https://restcountries.eu/rest/v2/all')
  //     // console.log('response data =', response.data)
  //     // console.log('response data filter =', response.data.filter( (element) => element.capital.length > 0))
  //     this.setState({ hasCapitals: response.data.filter( (element) => element.capital.length > 0) }, () => {
  //       // console.log('country, capital', this.state.hasCapitals[0].name, this.state.hasCapitals[0].capital)
  //       const rightAnswer = this.state.hasCapitals[Math.floor(Math.random() * this.state.hasCapitals.length)]
  //       const answerArray = [rightAnswer]
  //       let i = 0
  //       for (i = 0; i < 3; i++) {
  //         const genWrongAnswer = this.state.hasCapitals[Math.floor(Math.random() * this.state.hasCapitals.length)]
  //         if (!answerArray.includes(genWrongAnswer)) {
  //           answerArray.push(genWrongAnswer)
  //         }
  //       }
  //       console.log('answers', answerArray)
  //       this.setState({ rightAnswer1: rightAnswer, 
  //         allAnswers: answerArray
  //         // console.log('country, capital', this.state.randomCountry.name, this.state.randomCountry.capital)
  //       }) 
  //     })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // async componentDidMount() {
  //   try {
  //     const response = await axios.get('https://restcountries.eu/rest/v2/all')
  //     // console.log('response data =', response.data)
  //     // console.log('response data filter =', response.data.filter( (element) => element.capital.length > 0))
  //     this.setState({ hasCapitals: response.data.filter( (element) => element.capital.length > 0) }, () => {
  //       // console.log('country, capital', this.state.hasCapitals[0].name, this.state.hasCapitals[0].capital)
  //       this.setState({ randomCountry: this.state.hasCapitals[Math.floor(Math.random() * this.state.hasCapitals.length)] }, () => {
  //         // console.log('randomCountry =', this.state.randomCountry)
  //         // console.log('has capitals array length =', this.state.hasCapitals.length)
  //       }, () => {
  //         this.setState({ country: this.state.randomCountry.name,
  //           capital: this.state.randomCountry.capital
  //         })
  //         // console.log('country, capital', this.state.randomCountry.name, this.state.randomCountry.capital)
  //       }) 
  //     })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // filterNoCapitals = () => {
  //   const hasCapitals = { ...this.state.hasCapitals, [name]: value }
  //   this.setState({ data })
  // }
  handleClick = e => {
    if (e.target.innerHTML === this.state.rightAnswerCapital1) {
      e.target.classList.add('correct')
      console.log('increase score')
    } else e.target.classList.add('incorrect'),  this.findRightAnswer()
    this.stopScore()
  }

  // findRightAnswer() {
  //   const baseElement = document.querySelector('button')
  //   if (baseElement.innerHTML === this.state.rightAnswerCapital1) {
  //     baseElement.classList.add('correct')
  //   }
  // }

  findRightAnswer() {
    const baseElement = document.querySelectorAll('button')
    console.log('basse', baseElement)
    baseElement.forEach((btn => {
      if (btn.innerHTML === this.state.rightAnswerCapital1) {
        btn.classList.add('correct')
      }
    }))
  }

  stopScore() {
    console.log('stop score')
  }

  render() {
    console.log('render =', 
      this.state.allAnswers
    )
    return (
      <>
      <p>What is the capital of {this.state.rightAnswerCountry1}? </p>
      
      <p>Answer: {this.state.rightAnswerCapital1}</p> 
      
    <p>All Answers: 
      
      {this.state.allAnswers.map(answer => (
        <button key={answer} onClick={this.handleClick}>{answer}</button> 
      ))}
      
    </p>
      </>
    )
  }S
}

export default Capitals