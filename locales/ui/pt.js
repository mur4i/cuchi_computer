Locales["PT"] = {
    os_lang: "Português",
    os_language: "Idioma",
    os_language_selection: "Selecione o idioma para definir no sistema.",
    os_cancel: "Cancelar",
    os_close: "Fechar",
    os_boot: "Iniciando...",
    os_shutdown: "Desligar",
    os_shuttingdown: "Desligando...",
    os_shutdown_confirmation: "Você está prestes a desligar o computador, tem certeza?",
    os_shutdown_forced: "Desligamento forçado (muito longe da posição aberta)...",
    os_error: "Erro",
    os_fake_error: "Erro desconhecido: não é possível abrir {1}.exe",
    os_session: "Inicializando uma nova sessão...",
    os_refresh: "Atualizar",
    os_create: "Criar",
    os_delete: "Excluir",
    os_title: "Título",
    os_description: "Descrição",

    date_format: "pt-BR",

    cmd_unknown: "Este comando não existe.<br>Tente 'help' para listar todos os comandos disponíveis.",
    cmd_help_desc: "exibir todos os comandos disponíveis.",
    cmd_version_desc: "exibir versão atual.",
    cmd_clear_desc: "limpar saída do console.",
    cmd_exit_desc: "sair do prompt de comando.",
    cmd_shutdown_desc: "desligar o computador.",
    cmd_start_desc: "iniciar um app.<br>    Uso: start [app]",
    cmd_started: "Aplicativo '{1}.exe' foi iniciado.",
    cmd_start_error: "Aplicativo desconhecido '{1}.exe'.",
    cmd_start_not_specified: "Você precisa especificar um app.<br>    Uso: start [app]",
    cmd_start_already: "Aplicativo '{1}.exe' já está em execução.",
    cmd_taskkill_desc: "encerrar um aplicativo.<br>    Uso: taskkill [app]",
    cmd_taskkilled: "Aplicativo '{1}.exe' foi encerrado.",
    cmd_taskkill_error: "Aplicativo '{1}.exe' não está em execução.",
    cmd_taskkill_not_specified: "Você precisa especificar um aplicativo.<br>    Uso: taskkill [app]",
    cmd_iptracer_desc: "obter informações sobre o endereço IP especificado.<br>    Uso: ip-tracer [IPv4]",
    cmd_iptracer_not_specified: "Você precisa especificar um endereço IP.<br>    Uso: ip-tracer [IPv4]",
    cmd_iptracer_error: "O endereço IP está incorreto, deve ser algo como 11.22.33.44.",
    cmd_iptracer_result: `Endereço IP > <span style='color:green'>{1}</span>
    <br>Data & Hora > <span style='color:green'>{2}</span>
    <br>Zona > <span style='color:green'>{3}</span>
    <br>Latitude > <span style='color:green'>{4}</span>
    <br>Longitude > <span style='color:green'>{5}</span>
    <br>Localização > <span style='color:green'>{6}</span>
    <br><span style='color:red'>GPS definido.</span>`,
    cmd_iptracer_disconnected: "O endereço IP {1} está <span style='color:red'>desconectado</span> da rede.",
    cmd_netscan_desc: "escanear rede.",
    cmd_connect_desc: "acessar domínio.<br>    Uso: connect [domínio]",
    cmd_connect_not_specified: "Você precisa especificar um nome de domínio.<br>    Uso: connect [domínio]",
    cmd_connect_unknown: "Nome de domínio desconhecido.",
    cmd_connect_success: "Conectado com sucesso a <span style='color:green'>{1}</span>.",
    cmd_detect_desc: "detectar IP da rede a partir de sua posição atual.<br>    Uso comum: detect -ip",
    cmd_detect_arg: "Você precisa especificar o tipo de detecção.<br>    Uso comum: detect -ip",
    cmd_detect_none_detected: "Nenhum IP detectado perto de sua localização.",
    cmd_detect_detected: "Endereço encontrado <span style='color:green'>{1}</span> em sua localização.",
    cmd_scan_desc: "escanear coisas no endereço IP especificado.<br>    Uso comum: scan -ports [ip]",
    cmd_scan_arg: "Você precisa especificar o que deseja escanear.<br>    Uso comum: scan -ports [ip]",
    cmd_scan_wrong: "Não é possível escanear as portas do endereço IP fornecido.",
    cmd_scan_good: "Porta <span style='color:green'>{1}</span> está aberta.",
    cmd_infiltrate_desc: "encontrar e infiltrar um serviço em uma porta e endereço especificados.<br>    Uso comum: infiltrate -ip [ip] -port [porta-aberta]",
    cmd_infiltrate_arg: "Você precisa especificar o IP e a porta.<br>    Uso comum: infiltrate -ip [ip] -port [porta-aberta]",
    cmd_infiltrate_wrong: "Não é possível encontrar nenhum serviço para infiltrar em {1}:{2}",
    cmd_infiltrate_good: "Serviço em {1}:{2} <span style='color:green'>infiltrado</span>.",
    cmd_breach_desc: "invadir dados do serviço infiltrado.<br>    Uso comum: invadir -ip [ip] -port [porta-aberta]",
    cmd_breach_arg: "Você precisa especificar o IP e a porta.<br>    Uso comum: invadir -ip [ip] -port [porta-aberta]",
    cmd_breach_bad: "Não é possível encontrar nenhum serviço para invadir em {1}:{2}",
    cmd_breach_no: "Você precisa infiltrar o serviço antes de invadi-lo.",
    cmd_breach_good: "Serviço foi invadido, gravando dados em:<br><span style='color:crimson'>{1}</span>",
    cmd_breach_delay: "Você precisa esperar antes de invadir este serviço.",

    error_market_title: "Erro ao criar postagem",
    error_market_deletion_title: "Erro de exclusão",
    error_market_empty_arg: "O título ou a descrição está vazio.",
    error_market_arg_overflow: "Título ou descrição excede o tamanho permitido.",
    error_market_delay: "Aguarde entre cada postagem.",
    error_market_max: "Você atingiu o número máximo de postagens.",
    error_market_id: "ID inválido.",
    error_market_id_not_yours: "Este ID não é de uma das suas postagens.",
    info_market_creation_success: "Criado com sucesso!",
    info_market_creation_success_desc: "A postagem foi criada com sucesso.\nAtualize o mercado.",
    info_market_deletion_success: "Excluído com sucesso!",
    info_market_deletion_success_desc: "A postagem foi excluída com sucesso.\nAtualize o mercado.",
    market_yours: "seus",
    market_post: "Postagem",
    
    info_ipv4: "IPv4:",
    info_type: "Tipo de computador:",
    info_desktop: "Desktop",
    info_laptop: "Laptop",
    
    market_description: "Você pode criar uma postagem a cada {1} segundos, pode criar no máximo {2} postagens. Cada postagem ficará ativa por {3} dias.",
    
    mail_signin: "Entrar",
    mail_signup: "Inscrever-se",
    mail_save: "Salvar entradas para a próxima vez.",
    mail_preview: "Seu endereço de e-mail será {1}.",
    mail_passwords_different: "As senhas são diferentes.",
    mail_username_taken: "Este nome de usuário já está em uso.",
    mail_account_created: "Conta criada!",
    mail_empty: "Nome de usuário e/ou senha não podem estar vazios.",
    mail_input_overflow: "Nome de usuário ou senha excede o tamanho permitido.",
    mail_password_empty: "Defina uma senha.",
    mail_password_warning: "⚠️ AVISO: Não coloque uma senha real!",
    mail_connect_wrong: "A conta não existe ou o nome de usuário ou senha está incorreto.",
    mail_signout: "Sair",
    mail_create: "Novo e-mail",
    mail_unread: "NÃO LIDO",
    mail_object: "Objeto do e-mail",
    mail_text: "Texto...",
    mail_send: "Enviar",
    mail_new: "NOVO",
    mail_signup_message: "Sem conta? Inscreva-se",
    mail_signin_message: "Já tem uma conta? Entre",
    mail_username: "Nome de usuário",
    mail_password: "Senha",
    mail_confirm_password: "Confirmar senha",
    mail_send_error_address: "O endereço de e-mail inserido é inválido, não existe ou foi excluído.",
    mail_send_error_empty: "O objeto ou o texto do e-mail está vazio.",
    mail_send_error_overflow: "O objeto ou o texto do e-mail excede o tamanho permitido.",
    mail_answer: "Responder",
    
    addresses_desc: "Os usuários devem ter cuidado ao visitar os domínios listados, e não somos responsáveis por quaisquer consequências.",
    addr_chatincognitonet_connect_title: "Nome de usuário temporário:",
    addr_chatincognitonet_username: "Nome de usuário",
    addr_chatincognitonet_connect: "Conectar",
    addr_chatincognitonet_connect_taken: "Nome de usuário já utilizado",
    addr_chatincognitonet_send: "Enviar",
    addr_chatincognitonet_msg_placeholder: "mensagem... (255 caracteres)",
    addr_chatincognitonet_left: "saiu do chat.",
    addr_selldata_title: "Vender dados",
    addr_selldata_path: "Caminho para os dados...",
    addr_selldata_sell: "Vender",
    addr_selldata_bad: "Os dados não existem neste caminho ou não é possível acessar o caminho.",
    addr_selldata_sold: "Dados vendidos por ${1}.",
}    