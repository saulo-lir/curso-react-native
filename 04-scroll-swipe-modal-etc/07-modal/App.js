import React, {useState} from 'react';
import { Modal } from 'react-native';
import styled from 'styled-components/native';

const Page = styled.View`
  flex:1;
  justify-content:center;
  align-items:center;
`;

const Box = styled.View`
  width:100%;
  height:100%;
  background-color:rgba(0, 0, 0, 0.5);
  justify-content:center;
  align-items:center;
`;

const Botao = styled.Button``;

const BoxBody = styled.View`
  width:90%;
  height:200px;
  background-color:#FFF;
  border-radius:10px;
`;

export default () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Page>
      {/* Abrir modal */}
      <Botao title="Mostrar Modal" onPress={() => setModalVisible(true)} />

      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setModalVisible(false)} // No Android, quando o botão de voltar for clicado, então fechará o modal
      >
        <Box>
          <BoxBody>
              {/* Fechar modal */}
              <Botao title="Fechar" onPress={() => setModalVisible(false)}/>
          </BoxBody>
        </Box>
      </Modal>
    </Page>
  );
}
