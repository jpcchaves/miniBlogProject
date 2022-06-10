// CSS
import styles from "./CreatePost.module.css";

// Imports
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

const CreatePost = () => {
  // States
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.create_post}>
      <h2>Criar post</h2>
      <p>Escreva sobre o que você gosta e compartilhe o seu conhecimento</p>
      <form>
        <label>
          <span>Título</span>
          <input
            type="text"
            name="title"
            required
            placeholder="Título do post..."
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>URL da imagem</span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira o link da sua imagem..."
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Conteúdo</span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            cols="30"
            rows="10"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
      <button className="btn">Cadastrar</button>
      </form>
      {/* {!loading && <button className="btn">Cadastrar</button>}
      {loading && (
        <button className="btn" disabled>
          Aguarde...
        </button>
      )} */}
      {/* render the error */}
      {/* {error && <p className="error">{error}</p>} */}
    </div>
  );
};

export default CreatePost;
