import { useState, useEffect } from "react";
import { useController } from "react-hook-form";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FormInputWrapper from "../FormInputWrapper";

registerPlugin(FilePondPluginImagePreview);

const InputFile = ({ id, label, control, errors, ...props }) => {
  const [files, setFiles] = useState([]);

  const {
    field: { ref, ...inputProps },
  } = useController({
    name: id,
    control,
    rules: { required: true },
    defaultValue: "",
  });

  useEffect(() => {
    inputProps.onChange(files.map(pluginFile => pluginFile?.file));
  }, [files]);

  return (
    <FormInputWrapper hideLabel id={id} label={label} errors={errors}>
      <FilePond
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        labelIdle='Arraste e solte seus documentos ou <span class="filepond--label-action">clique aqui</span>'
        credits={{ label: "", url: "" }}
        {...props}
      />
    </FormInputWrapper>
  );
};

export default InputFile;
