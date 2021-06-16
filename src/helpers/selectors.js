export function getAppointmentsForDay(state, day) {
  let appointments = [];
  for(let tDay of state.days){
    if(tDay.name === day){
      for(let appointment of tDay.appointments){
        if(state.appointments[appointment.toString()]){
          appointments.push(state.appointments[appointment.toString()])
        }
      }
      return appointments
    }
  }
  return appointments;
}

export function getInterview(state, interview) {
  if (interview){
    const interviewerId = interview.interviewer;
    const studentName = interview.student;
    for(let interviewer in state.interviewers){
      if(state.interviewers[interviewer.toString()].id === interviewerId){
        return {
          student: studentName,
          interviewer: state.interviewers[interviewer.toString()]
        }
      }
    }
  }
  return null;
}

export function getInterviewersForDay(state, day) {
  const dayData = state.days.find(element => element.name === day)
  
  if (dayData) return dayData.interviewers.map(id => state.interviewers[id]);
  else return [];
}

