import { useForm } from "react-hook-form"
import './postForm.css'

export const PostForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      state: '',
      autor: '',
      date: '',
      body: ''
    }
  })
  return (
    <>
      <div className="postForm-container">
        <form>
          <div className="postForm-container_main">
            <h1 className="postForm-title">
              Create Post
            </h1>
            <div className="w-auto">
              <div className="postForm-container_inputs">
                <input
                  type="text"
                  placeholder="title"
                  className="postForm-input"
                />
              </div>
              <div className="postForm-container_inputs">
                <select name="select" className="postForm-select">
                  <option value="" selected>Select state</option>
                  <option value="Aguascalientes">Aguascalientes</option>
                  <option value="Baja California">Baja California</option>
                  <option value="Baja California Sur">Baja California Sur</option>
                  <option value="Campeche">Campeche</option>
                  <option value="Chiapas">Chiapas</option>
                  <option value="Chihuahua">Chihuahua</option>
                  <option value="CDMX">Ciudad de México</option>
                  <option value="Coahuila">Coahuila</option>
                  <option value="Colima">Colima</option>
                  <option value="Durango">Durango</option>
                  <option value="Estado de México">Estado de México</option>
                  <option value="Guanajuato">Guanajuato</option>
                  <option value="Guerrero">Guerrero</option>
                  <option value="Hidalgo">Hidalgo</option>
                  <option value="Jalisco">Jalisco</option>
                  <option value="Michoacán">Michoacán</option>
                  <option value="Morelos">Morelos</option>
                  <option value="Nayarit">Nayarit</option>
                  <option value="Nuevo León">Nuevo León</option>
                  <option value="Oaxaca">Oaxaca</option>
                  <option value="Puebla">Puebla</option>
                  <option value="Querétaro">Querétaro</option>
                  <option value="Quintana Roo">Quintana Roo</option>
                  <option value="San Luis Potosí">San Luis Potosí</option>
                  <option value="Sinaloa">Sinaloa</option>
                  <option value="Sonora">Sonora</option>
                  <option value="Tabasco">Tabasco</option>
                  <option value="Tamaulipas">Tamaulipas</option>
                  <option value="Tlaxcala">Tlaxcala</option>
                  <option value="Veracruz">Veracruz</option>
                  <option value="Yucatán">Yucatán</option>
                  <option value="Zacatecas">Zacatecas</option>
                </select>
              </div>
              <div className="postForm-container_inputs">
                <input
                  type="text"
                  placeholder="state"
                  className="postForm-input"
                />
              </div>
              <div className="postForm-container_inputs">
                <input
                  type="text"
                  disabled={true}
                  className="postForm-input" />
              </div>
              <div className="postForm-container_inputs">
                <input
                  type="date"
                  placeholder="date"
                  className="postForm-input "
                />
              </div>
              <div className="postForm-container_inputs">
                <textarea
                  placeholder="tap your ideas!"
                  className="postForm-textArea"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="postForm-button"
                >save</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )

}