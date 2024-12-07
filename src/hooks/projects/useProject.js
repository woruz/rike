import { useState, useEffect, useContext } from "react";
import { ProjectContext } from "../../context/ProjectContext";
const useProject = () => {
  const [loading, setLoading] = useState(false);
  const [fail, setFail] = useState(false);
  const {setAllProjects} = useContext(ProjectContext)

  useEffect(() => {
    fetchProject()
  }, [])

  const addProject = async (body) => {
    setLoading(true);
    setFail(null);
    try {
      fetch(`http://localhost:4000/project/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          fetchProject()
        })
        .catch((err) => {
          setFail(true);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      setFail("Something went wrong");
      setLoading(false);
    }
  };
  

  const addTask = async (body,setProjects) => {
    setLoading(true);
    setFail(null);
    try {
      fetch(`http://localhost:4000/project/task/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => {
          return response.json();
        })
        .then((responseData) => {
          fetchProject()
        })
        .catch((err) => {
          setFail(true);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      setFail("Something went wrong");
      setLoading(false);
    }
  };

  const fetchProject = () => {
    setLoading(true);
    setFail(null);

    try {
      fetch("http://localhost:4000/project/get")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if(data.success){
            setAllProjects(data.response)
          }else{
            setFail(true)
          }
        })
        .catch((err) => {
          setFail(true);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {
      setFail("Something went wrong");
      setLoading(false);
    }
  };

  return {
    loading,
    addTask,
    addProject,
    fail,
  };
};

export default useProject;
