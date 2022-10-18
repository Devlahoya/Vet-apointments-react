import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Patient's List</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Administrate Your {''}
                        <span className="text-green-600 font-bold ">Patient's And Appointments</span>
                    </p>

                    { pacientes.map( paciente => (
                        <Paciente 
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>

            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">There Are Not Patient's</h2>
                    <p className="text-xl mt-5 mb-10 text-center">
                        Add One {''}
                        <span className="text-green-800 font-bold ">Now</span>
                    </p>
                </>
            )}
        </div>
    )
}

export default ListadoPacientes
