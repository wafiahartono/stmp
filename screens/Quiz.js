import { Button, Chip, LinearProgress, Text } from "@rneui/base"
import { Component } from "react"
import { ScrollView, View } from "react-native"
import Question from "../classes/Question"

class Quiz extends Component {
  timeLimit = 10

  state = {
    timer: this.timeLimit,

    oneSecInterval: setInterval(() => {
      let timer = this.state.timer - 1

      timer >= 0 && this.setState({
        timer: timer,
      })

      timer == 0 && this.nextQuestion()
    }, 1000),

    score: 0,

    questions: [
      new Question(
        'Which of these superheroes is not a member of The Avengers?',
        ['Iron Man', 'Spider-Man', 'Thor', 'Hulk Hogan'],
        3,
      ),
      new Question(
        'Which of these is not a member of Teletubbies?',
        ['Tinky Winky', 'Dipsy', 'Laa-Laa', 'Patrick'],
        3,
      ),
      new Question(
        'Which of these superheroes is not a member of Justice League?',
        ['Batman', 'Superman', 'The Flash', 'Aquades'],
        3,
      ),
    ],
    questionIndex: 0,
    question: () => this.state.questions[this.state.questionIndex],
  }

  /**
   * @param {number} value
   */
  formatTime(value) {
    let hours = Math.floor(value / 3600)
    let minutes = Math.floor((value - hours * 3600) / 60)
    let seconds = value - hours * 3600 - minutes * 60
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }

  nextQuestion() {
    if (this.state.questionIndex == this.state.questions.length - 1) {
      this.setState({
        timer: 0,
      })
      return
    }

    this.setState({
      timer: this.timeLimit,
      questionIndex: this.state.questionIndex + 1
    })
  }

  /** @param {number} answer */
  checkAnswer(answer) {
    answer == this.state.question().answer && this.setState({
      score: this.state.score + 100,
    })

    this.nextQuestion()
  }

  render() {
    return (
      <ScrollView>
        {
          this.state.timer == 0 && this.state.questionIndex == this.state.questions.length - 1 ?
            this.ResultUI() :
            this.QuizUI()
        }

        {/* <Button
          title="+"
          onPress={() => {
            this.setState({ timer: this.state.timer + 1 })
          }}>
        </Button> */}
      </ScrollView>
    )
  }

  QuizUI = () => (
    <View>
      <LinearProgress animation={false} value={this.state.timer / this.timeLimit} />

      <Text style={{ marginHorizontal: 'auto', marginTop: 8, fontSize: 16 }}>
        Time remaining:
        <Text style={{ marginStart: 4, fontWeight: '500' }}>{this.formatTime(this.state.timer)}</Text>
      </Text>

      <View style={{ alignItems: 'center', marginTop: 16 }}>
        <Chip
          title={'Your score: ' + this.state.score} />
      </View>

      <Text h2 style={{ marginHorizontal: 16, marginTop: 16, marginBottom: 8 }}>
        {this.state.question().text}
      </Text>

      {this.state.question().options.map((option, index) => (
        <Button key={index}
          style={{ marginHorizontal: 16, marginTop: 8 }}
          radius={8}
          titleStyle={{ fontSize: 14, fontWeight: '600' }}
          type="outline"
          onPress={() => { this.checkAnswer(index) }}
        >
          {option}
        </Button>
      ))}
    </View>
  )

  ResultUI = () => (
    <View>
      <Text h2 style={{ marginHorizontal: 16, marginTop: 16 }}>
        Game over. Your scored:
      </Text>

      <View style={{ alignItems: 'center', marginTop: 8 }}>
        <Chip title={this.state.score} />
      </View>

      <Button
        style={{ marginHorizontal: 16, marginTop: 16 }}
        onPress={() => {
          this.setState({
            timer: this.timeLimit,
            questionIndex: 0,
            score: 0,
          })
        }}>
        Play again
      </Button>
    </View>
  )
}

export default Quiz
