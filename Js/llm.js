import { GoogleGenerativeAI } from "@google/generative-ai"
    const clave = "AIzaSyCITW-N2LsFS7w5trNDjHhGuFIJ0njvTh4" 

    const genAI = new GoogleGenerativeAI(clave)
    const model = genAI.getGenerativeModel({ model: "gemini-pro" })

    document.querySelector("#botonConsulta").addEventListener("click", async () => {
     
      const consulta = document.querySelector("#consulta").value
      const resultadoConsulta = document.querySelector("#code")
      try {
        const result = await model.generateContent(consulta + "solo dame coidgo nada mas")
        const response = await result.response
        const text = response.text()
        resultadoConsulta.innerHTML = text
        sessionStorage.setItem('respuesta', text);

        window.location.href = "../d/Generado.html";
   
      } catch (error) {
        resultadoConsulta.innerHTML = 'Problemas en la consulta'
      }
      
    })
